// index.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Agar frontend bisa akses backend
app.use(express.json());

// Konfigurasi Email (Nodemailer)
// PENTING: Untuk Gmail, Anda perlu membuat "App Password" di pengaturan Google Account
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Email pengirim (bisa email Colink atau email khusus bot)
    pass: process.env.EMAIL_PASS  // App Password dari Google
  }
});

// Endpoint API untuk Contact Form
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const mailOptions = {
    from: email, // Email pengunjung (hanya sebagai label)
    to: 'lacolink2025@gmail.com', // Email penerima (Admin Colink)
    subject: `[Web Inquiry] ${subject} - ${firstName} ${lastName}`,
    html: `
      <h3>New Message from Website</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <br/>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});