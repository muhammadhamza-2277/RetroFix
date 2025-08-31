const express = require('express');
const multer = require('multer');
const InternshipApplication = require('../models/InternshipApplication');
const sendMail = require("../utils/sendMail");
const router = express.Router();

// Multer config - store files in memory
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Only PDF files are allowed'));
        }
        cb(null, true);
    }
});

// POST /api/apply
router.post('/', upload.array('documents', 2), async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            gender,
            nationality,
            email,
            phone,
            work_experience,
            earliest_join_date,
            department_interest,
            human_check
        } = req.body;

        // ✅ Human check validation
        if (human_check !== '11') {
            return res.status(400).json({ message: 'Human verification failed' });
        }

        // ✅ Build documents array from uploaded files
        const documents = req.files.map(file => ({
            file_name: file.originalname,
            file_data: file.buffer,
            file_mime: file.mimetype
        }));

        // ✅ Create application record
        const application = new InternshipApplication({
            first_name,
            last_name,
            gender,
            nationality,
            email,
            phone,
            work_experience,
            earliest_join_date,
            department_interest,
            documents,
            human_check
        });

        await application.save();


        // Send confirmation to user
        await sendMail(
            email,
            "Your Career Application at Retrofix Solutions Ltd.",
            `<p>Hello ${first_name},</p>
   <p>Thank you for applying to <b>Retrofix Solutions Ltd.</b></p>
   <p>We have received your career application and our HR team will carefully review your details. 
   If your profile matches our requirements, we will reach out to you to discuss the next steps.</p>
   <p>We truly appreciate your interest in joining our team and wish you the best of luck in the process.</p>
   <p>Best regards,<br/>
   <b>Retrofix Solutions HR Team</b></p>`,
            `Hello ${first_name},\n\nThank you for applying to Retrofix Solutions Ltd.\nWe have received your career application and our HR team will carefully review your details. If your profile matches our requirements, we will contact you to discuss the next steps.\n\nWe truly appreciate your interest in joining our team and wish you the best of luck in the process.\n\nBest regards,\nRetrofix Solutions HR Team`
        );


        // Send notification to admin
        await sendMail(
            [process.env.EMAIL_USER, 'muham.hamza@protonmail.com'],
            "✨ New Career Application Received",
            `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
      <h2 style="color:#2c3e50;">📩 New Career Application</h2>
      <p>A new candidate has submitted their application with the following details:</p>
      
      <table style="border-collapse: collapse; width: 100%; margin-top: 15px;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Name</b></td><td style="padding: 8px; border: 1px solid #ddd;">${first_name} ${last_name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Gender</b></td><td style="padding: 8px; border: 1px solid #ddd;">${gender}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Nationality</b></td><td style="padding: 8px; border: 1px solid #ddd;">${nationality}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Email</b></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Phone</b></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Work Experience</b></td><td style="padding: 8px; border: 1px solid #ddd;">${work_experience}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Earliest Join Date</b></td><td style="padding: 8px; border: 1px solid #ddd;">${earliest_join_date}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Department of Interest</b></td><td style="padding: 8px; border: 1px solid #ddd;">${department_interest}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Human Check</b></td><td style="padding: 8px; border: 1px solid #ddd;">${human_check}</td></tr>
      </table>

      <p style="margin-top: 20px;">
        🔗 <a href="https://retrofixsolutions.netlify.app/admin" style="color:#2980b9; text-decoration:none; font-weight:bold;">
        Click here to view full application details</a>
      </p>

      <p style="margin-top: 30px; font-size: 14px; color:#555;">
        Regards,<br/>
        <b>Retrofix Career Portal</b>
      </p>
    </div>
  `,
            `New Career Application:\n
  Name: ${first_name} ${last_name}
  Gender: ${gender}
  Nationality: ${nationality}
  Email: ${email}
  Phone: ${phone}
  Work Experience: ${work_experience}
  Earliest Join Date: ${earliest_join_date}
  Department Interest: ${department_interest}
  Human Check: ${human_check}

  View full info: https://retrofixsolutions.netlify.app/admin
  `
        );


        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (err) {
        console.error('Error saving application:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});


router.get("/:id/file/:fileId", async (req, res) => {
    const form = await InternshipApplication.findById(req.params.id);
    if (!form) return res.status(404).send("Form not found");

    const file = form.documents.id(req.params.fileId);
    if (!file) return res.status(404).send("File not found");

    res.set("Content-Type", file.file_mime);
    res.set("Content-Disposition", `inline; filename="${file.file_name}"`);
    res.send(file.file_data);
});

router.get("/", async (req, res) => {
    try {
        const applications = await InternshipApplication.find().sort({ createdAt: -1 });
        res.json({ success: true, data: applications });
    } catch (err) {
        console.error("Error fetching applications:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});


module.exports = router;
