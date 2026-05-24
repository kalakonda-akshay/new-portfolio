const nodemailer = require("nodemailer");
const Suggestion = require("../models/Suggestion");

const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const sendFallbackEmail = async ({ name, email, subject, message }) => {
  const targetEmail = process.env.MAIL_TO || "akshaykalakonda9@gmail.com";
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject: `Portfolio suggestion: ${subject}`,
      message: `From: ${name} <${email}>\n\n${message}`,
      _subject: `Portfolio suggestion: ${subject}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || "Fallback email service failed.");
  }
};

const createSuggestion = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      res.status(400);
      throw new Error("Name, email, subject and message are required.");
    }

    const transporter = createTransporter();
    let suggestion = null;
    let delivery = "not_sent";

    if (req.app.locals.dbConnected) {
      suggestion = await Suggestion.create({ name, email, subject, message });
      delivery = "stored";
    }

    if (transporter) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: process.env.MAIL_TO || "akshaykalakonda9@gmail.com",
        replyTo: email,
        subject: `Portfolio suggestion: ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
      delivery = "smtp";
    } else {
      try {
        await sendFallbackEmail({ name, email, subject, message });
        delivery = "fallback";
      } catch (mailError) {
        if (!suggestion) {
          res.status(503);
          throw new Error("Message could not be delivered because MongoDB and email delivery are unavailable locally.");
        }
        delivery = "stored";
      }
    }

    res.status(suggestion ? 201 : 200).json({
      message: delivery === "smtp"
        ? suggestion
          ? "Suggestion saved and emailed."
          : "Suggestion emailed. MongoDB is currently offline locally."
        : delivery === "fallback"
          ? suggestion
            ? "Suggestion saved and email delivery requested. Check your inbox for any one-time FormSubmit activation email."
            : "Email delivery requested. Check your inbox for any one-time FormSubmit activation email."
          : "Suggestion saved in MongoDB. Add SMTP_PASS as a Gmail App Password to receive it by email.",
      suggestionId: suggestion?._id,
      delivery,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createSuggestion };
