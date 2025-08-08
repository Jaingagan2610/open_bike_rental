
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'gaganjain988@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #4a5568; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Submission</h2>
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
        <div style="font-size: 12px; color: #718096; margin-top: 20px; border-top: 1px solid #e0e0e0; padding-top: 10px;">
          This message was sent from your website's contact form.
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});

module.exports = app;
