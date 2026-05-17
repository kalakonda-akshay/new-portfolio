const nodemailer = require("nodemailer");
const connectDB = require("./_db");
const { Suggestion } = require("./_models");

function createTransporter() {
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
}

async function sendFallbackEmail({ name, email, subject, message }) {
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

  return response.json().catch(() => ({ success: true }));
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Name, email, subject and message are required." });
    }

    await connectDB();
    const suggestion = await Suggestion.create({ name, email, subject, message });
    const transporter = createTransporter();
    let delivery = "stored";

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
        delivery = "stored";
      }
    }

    return res.status(201).json({
      message: delivery === "smtp"
        ? "Suggestion saved and emailed."
        : delivery === "fallback"
          ? "Suggestion saved and email delivery requested. Check your inbox for any one-time FormSubmit activation email."
          : "Suggestion saved in MongoDB. Add SMTP_PASS as a Gmail App Password in Vercel to receive it by email.",
      suggestionId: suggestion._id,
      delivery,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
