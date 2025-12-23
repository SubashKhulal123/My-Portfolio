
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

console.log('EMAIL_USER:', process.env.EMAIL_USER || 'Not set');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '****' : 'Not set');
console.log('EMAIL_HOST:', process.env.EMAIL_HOST || 'Not set');
console.log('EMAIL_PORT:', process.env.EMAIL_PORT || 'Not set');
console.log('EMAIL_FROM:', process.env.EMAIL_FROM || 'Not set');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT, 10) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP configuration error:', error.message);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

export const sendEmail = async ({ to, subject, html }) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_FROM) {
      console.error('Missing SMTP credentials or EMAIL_FROM:', {
        EMAIL_USER: process.env.EMAIL_USER || 'Not set',
        EMAIL_PASS: process.env.EMAIL_PASS ? '****' : 'Not set',
        EMAIL_FROM: process.env.EMAIL_FROM || 'Not set',
      });
      throw new Error('SMTP configuration incomplete');
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${to}`, { messageId: info.messageId });
    return true;
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    throw error;
  }
};