const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMail = async (to, subject, html, text = "") => {
    try {
        await transporter.sendMail({
            from: `"Retrofix Solutions" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html,
        });
        console.log("✅ Email sent to:", to);
    } catch (error) {
        console.error("❌ Email error:", error);
        throw error;
    }
};

module.exports = sendMail;
