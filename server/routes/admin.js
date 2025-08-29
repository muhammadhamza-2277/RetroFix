const express = require("express");
const bcrypt = require("bcrypt"); // if you want hashed password
const jwt = require("jsonwebtoken");
const EligibilityForm = require("../models/Eligibility");
const ContactForm = require("../models/Contact");
const CareerForm = require("../models/InternshipApplication");

const router = express.Router();
require('dotenv').config();

const ADMIN_USER = {
    username: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS,
    // username: "admin-info@retrofixsolutions.co.uk",
    // password: 'gocretro123'
};
// const ADMIN_USER = {
//     username: process.env.ADMIN_USER,
//     password: process.env.ADMIN_PASS
// };
// login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username == ADMIN_USER.username && password == ADMIN_USER.password) {
        const token = jwt.sign({ role: "admin" }, "secretKey", { expiresIn: "1h" });
        return res.json({ token });
    }


    return res.status(401).json({ error: "Invalid credentials" });
});

// middleware to check token
const auth = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) return res.status(401).json({ error: "Unauthorized" });

    const token = header.split(" ")[1];
    jwt.verify(token, "secretKey", (err, decoded) => {
        if (err) return res.status(403).json({ error: "Forbidden" });
        next();
    });
};

// fetch data (with files base64 encoded for frontend)
router.get("/eligibility", auth, async (req, res) => {
    const forms = await EligibilityForm.find();
    res.json(forms);
});

router.get("/contact", auth, async (req, res) => {
    const forms = await ContactForm.find();
    res.json(forms);
});

router.get("/career", auth, async (req, res) => {
    const forms = await CareerForm.find();
    res.json(forms);
});

// get file by ID + field + index (inline view or download)
router.get("/eligibility/:id/files/:field/:index", auth, async (req, res) => {
    const { id, field, index } = req.params;
    const form = await EligibilityForm.findById(id);
    if (!form || !form.files[field]) return res.status(404).send("File not found");

    const file = form.files[field][index];
    res.set("Content-Type", file.file_mime);
    res.send(file.file_data);
});

module.exports = router;
