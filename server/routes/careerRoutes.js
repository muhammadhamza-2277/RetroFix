const express = require('express');
const multer = require('multer');
const InternshipApplication = require('../models/InternshipApplication');

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
