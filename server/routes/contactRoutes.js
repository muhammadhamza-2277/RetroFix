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
            "Thanks for Contacting Retrofix solutions Ltd.",
            `<p>Hello ${firstName},</p>
       <p>Thanks for contacting us! We’ll get back to you soon.</p>
       <p><b>Your message:</b> ${message}</p>`,
            `Hello ${firstName},\n\nThanks for contacting us! We’ll get back to you soon.\n\nYour message:\n${message}`
        );

        // Send notification to admin
        await sendMail(
            process.env.EMAIL_USER,
            "New Contact Form Submission",
            `<h3>New Contact Form Submission</h3>
       <p><b>Name:</b> ${firstName} ${lastName}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Phone:</b> ${phone}</p>
       <p><b>Service:</b> ${serviceType}</p>
       <p><b>Address:</b> ${address}</p>
       <p><b>Message:</b> ${message}</p>`,
            `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceType}\nAddress: ${address}\nMessage: ${message}`
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
