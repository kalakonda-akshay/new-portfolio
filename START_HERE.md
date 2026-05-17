# Akshay Portfolio - Run Instructions

## 1. Extract the zip

Extract the folder anywhere, for example:

`D:\portfolio-final`

Open PowerShell in that extracted folder.

## 2. Install dependencies

```powershell
npm install
cd backend
npm install
cd ..
```

## 3. Create backend environment file

Create this file:

`backend\.env`

Use this content:

```env
MONGO_URI=mongodb+srv://akshaykalakonda9_db_user:4KXG1BBpT5C88PSv@cluster0.x2pdy7c.mongodb.net/portfolio_db?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
CLIENT_URL=http://localhost:5500,http://127.0.0.1:5500,http://localhost:5173
MAIL_TO=akshaykalakonda9@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=akshaykalakonda9@gmail.com
SMTP_PASS=your_gmail_app_password_here
MAIL_FROM=akshaykalakonda9@gmail.com
```

Do not upload `backend\.env` to GitHub.

## 4. Run backend

```powershell
npm start
```

Backend runs at:

`http://localhost:5000`

Check:

`http://localhost:5000/api/health`

## 5. Run frontend

Because this portfolio is a static HTML portfolio, use VS Code Live Server:

1. Open the extracted folder in VS Code.
2. Right-click `index.html`.
3. Click **Open with Live Server**.

The site will open around:

`http://127.0.0.1:5500`

## 6. Contact form email

The contact form saves messages to MongoDB.

For Gmail inbox delivery, `SMTP_PASS` must be a Gmail App Password. Your normal Gmail password will not work.

## 7. Certificates

Internship certificates are in:

`assets/certificates/`

The portfolio currently includes:

- `prodigy-cert.svg`
- `thiranex-cert.svg`
- `pridology-cert.svg`

