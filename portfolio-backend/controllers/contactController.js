
import Contact from '../models/contactModel.js';
import { sendEmail } from '../services/emailService.js';

export const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();


    Promise.all([
      sendEmail({
        to: process.env.PERSONAL_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }).catch((error) => {
        console.error('Error sending notification email:', error);
      }),
      sendEmail({
        to: email,
        subject: `Thank You for Contacting Us, ${name}!`,
        html: `
          <h2>Thank You for Your Message!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you soon.</p>
          <p><strong>Your Message:</strong> ${message}</p>
          <p>Best regards,<br>The Portfolio Team</p>
        `,
      }).catch((error) => {
        console.error('Error sending confirmation email:', error);
      }),
    ]).catch((error) => {
      console.error('Error in background email sending:', error);
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
};