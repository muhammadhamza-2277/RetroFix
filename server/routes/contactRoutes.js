const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

const sendMail = require("../utils/sendMail");


require('dotenv').config();
// Create new contact
router.post("/", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, serviceType, address, message } = req.body;

        const contact = new Contact(req.body);
        const saved = await contact.save();

        // Send confirmation to user
        await sendMail(
            email,
            "Thank you for contacting Retrofix Solutions Ltd.",
            `
    <p>Dear ${firstName} ${lastName},</p>
    <p>Thank you for reaching out to <b>Retrofix Solutions Ltd.</b>. We have received your inquiry and our team will get back to you shortly.</p>
    
    <p><b>Here are the details you submitted:</b></p>
    <ul>
      <li><b>Name:</b> ${firstName} ${lastName}</li>
      <li><b>Email:</b> ${email}</li>
      <li><b>Phone:</b> ${phone || "N/A"}</li>
      <li><b>Service Type:</b> ${serviceType || "N/A"}</li>
      <li><b>Address:</b> ${address || "N/A"}</li>
      <li><b>Message:</b> ${message || "N/A"}</li>
    </ul>

    <p>We appreciate your interest in our services and will contact you soon.</p>
    <p>Best regards,</p>
    <p><b>Retrofix Solutions Ltd.</b></p>
  `,
            `Dear ${firstName} ${lastName},

Thank you for reaching out to Retrofix Solutions Ltd. We have received your inquiry and our team will get back to you shortly.

Here are the details you submitted:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || "N/A"}
- Service Type: ${serviceType || "N/A"}
- Address: ${address || "N/A"}
- Message: ${message || "N/A"}

We appreciate your interest in our services and will contact you soon.

Best regards,
Retrofix Solutions Ltd.`
        );


        // Send notification to admin
        await sendMail(
            process.env.EMAIL_USER,
            "📩 New Contact Form Submission",
            `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
    <h2 style="color:#2c3e50;">📩 New Contact Form Submission</h2>
    <p>A new inquiry has been received with the following details:</p>
    
    <table style="border-collapse: collapse; width: 100%; margin-top: 15px;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><b>Name</b></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><b>Email</b></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><b>Phone</b></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${phone || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><b>Service Type</b></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${serviceType || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><b>Address</b></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${address || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><b>Message</b></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${message || "N/A"}</td>
      </tr>
    </table>

    <p style="margin-top: 20px;">
      🔗 <a href="${process.env.ADMIN_DASHBOARD}" style="color:#2980b9; text-decoration:none; font-weight:bold;">
      Click here to view and manage this submission</a>
    </p>

    <p style="margin-top: 30px; font-size: 14px; color:#555;">
      Regards,<br/>
      <b>Retrofix Solutions Ltd. — Admin Notification</b>
    </p>
  </div>
  `,
            `New Contact Form Submission:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "N/A"}
Service Type: ${serviceType || "N/A"}
Address: ${address || "N/A"}
Message: ${message || "N/A"}

You can view and manage this submission at: ${process.env.ADMIN_DASHBOARD}`
        );


        res.status(201).json({ success: true, data: saved });
    } catch (error) {
        console.error("❌ Contact form error:", error);
        res.status(400).json({ success: false, message: error.message });
    }
});

// Get all contacts (optional admin use)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
