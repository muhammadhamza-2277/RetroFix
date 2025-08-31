const express = require("express");
const multer = require("multer");
const EligibilityForm = require("../models/Eligibility");
const router = express.Router();
const sendMail = require("../utils/sendMail");

// Use memory storage so files are kept in RAM, not disk
const storage = multer.memoryStorage();


require('dotenv').config();

// only allow images
const fileFilter = (req, file, cb) => {
    if (file.mimetype && file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1 * 1024 * 1024 }, // 1MB max
});

// map field names to schema keys
const mapFieldToKey = (fieldname = "") => {
    const s = fieldname.toLowerCase();
    if (s.includes("front")) return "frontElevation";
    if (s.includes("back")) return "backElevation";
    if (s.includes("side")) return "sideElevation";
    if (s.includes("boiler")) return "boiler";
    if (s.includes("loft")) return "loft";
    return fieldname.replace(/\s+/g, "");
};

router.post("/", upload.any(), async (req, res) => {
    try {
        const body = req.body || {};
        const { email, foreName, surName, phone, address, postCode, town, dob, loftYear, benefitsClaimed, houseType, wallType, heatingAge } = body;


        // group files into schema structure
        const grouped = {
            frontElevation: [],
            backElevation: [],
            sideElevation: [],
            boiler: [],
            loft: [],
        };

        if (Array.isArray(req.files)) {
            req.files.forEach((f) => {
                const mapped = mapFieldToKey(f.fieldname);
                if (grouped[mapped]) {
                    grouped[mapped].push({
                        file_name: f.originalname,
                        file_data: f.buffer,   // store buffer directly
                        file_mime: f.mimetype,
                    });
                }
            });
        }

        // enforce max 3 per group
        for (const [k, arr] of Object.entries(grouped)) {
            if (arr.length > 3) {
                return res.status(400).json({ error: `Max 3 files allowed for ${k}` });
            }
        }

        // parse questions JSON
        let questions = {};
        if (body.questions) {
            try {
                questions = typeof body.questions === "string"
                    ? JSON.parse(body.questions)
                    : body.questions;
            } catch {
                questions = {};
            }
        }

        // create and save doc
        const doc = new EligibilityForm({
            doorNo: body.doorNo || "",
            address: body.address || "",
            postCode: body.postCode || "",
            town: body.town || "",
            foreName: body.foreName || "",
            surName: body.surName || "",
            phone: body.phone || "",
            email: body.email || "",
            dob: body.dob || "",
            loftYear: body.loftYear || "",
            benefitsClaimed: body.benefitsClaimed || "",
            houseType: body.houseType || "",
            wallType: body.wallType || "",
            heatingAge: body.heatingAge || "",
            questions,
            files: grouped,
        });

        await doc.save();


        //     await sendMail(
        //         doc.email,
        //         "Thanks for contacting Retrofix Solutions Ltd.",
        //         `
        //   <div>
        //     <h2>Hello ${foreName},</h2>
        //     <p>Thank you for contacting <b>Retrofix Solutions Ltd.</b> regarding your eligibility check.</p>
        //     <p>Our Team will get back to you soon with your <b>Eligibility</b> status.</p>
        //   </div>
        // `,
        //         `Hello ${foreName},\n\nThank you for contacting Retrofix Solutions Ltd. regarding your eligibility check.\n Our Team will get back to you soon with your Eligibility status.`
        //     );

        await sendMail(
            doc.email,
            "✅ Your Eligibility Check Request – Retrofix Solutions Ltd.",
            `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
      <h2 style="color:#2c3e50;">Hello ${doc.foreName},</h2>

      <p>Thank you for submitting your <b>Eligibility Check</b> request with 
      <b>Retrofix Solutions Ltd.</b>.</p>

      <p>We have successfully received your details, and our assessment team will carefully review your information to determine your eligibility.</p>

      <h3 style="margin-top:20px; color:#2c3e50;">📋 Summary of Your Submission</h3>
      <table style="border-collapse: collapse; width: 100%; margin-top: 10px;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Name</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.foreName} ${doc.surName}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Email</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Phone</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Address</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.doorNo} ${doc.address}, ${doc.town}, ${doc.postCode}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>House Type</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.houseType || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Wall Type</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.wallType || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Heating Age</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.heatingAge || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Loft Year</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.loftYear || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Benefits Claimed</b></td><td style="padding: 8px; border: 1px solid #ddd;">${doc.benefitsClaimed || "N/A"}</td></tr>
      </table>

      <p style="margin-top: 20px;">📨 Our team will be in touch with you shortly to confirm your eligibility status.</p>

      <p style="margin-top: 30px; font-size: 14px; color:#555;">
        Regards,<br/>
        <b>Retrofix Solutions Ltd.</b>
      </p>
    </div>
  `,
            `Hello ${doc.foreName},

Thank you for submitting your Eligibility Check request with Retrofix Solutions Ltd.

We have received your details, and our assessment team will review your information to determine your eligibility.

Here’s a summary of your submission:
- Name: ${doc.foreName} ${doc.surName}
- Email: ${doc.email}
- Phone: ${doc.phone}
- Address: ${doc.doorNo} ${doc.address}, ${doc.town}, ${doc.postCode}
- House Type: ${doc.houseType || "N/A"}
- Wall Type: ${doc.wallType || "N/A"}
- Heating Age: ${doc.heatingAge || "N/A"}
- Loft Year: ${doc.loftYear || "N/A"}
- Benefits Claimed: ${doc.benefitsClaimed || "N/A"}

Our team will contact you soon with your eligibility status.

Regards,  
Retrofix Solutions Ltd.`
        );

        await sendMail(
            "muhammadhamza.227710@gmail.com", // you can also use an array of emails
            "New Submission",
            `<p>New submission received. eligibility form</p>`,
            `New submission received.`
        );

        //     // Send notification to admin
        //     await sendMail(
        //         process.env.EMAIL_USER,
        //         "New Eligibility Form Submission",
        //         `
        //   <div>
        //     <h2>New Eligibility Form Submission</h2>
        //     <p><b>Name:</b> ${foreName} ${surName}</p>
        //     <p><b>Email:</b> ${email}</p>
        //     <p><b>Phone:</b> ${phone}</p>

        //     <a href="http://localhost:5173/admin">Visit admin panel</a>

        //   </div>
        // `
        //     );


        // Send notification to admin
        await sendMail(
            process.env.EMAIL_USER,
            "📥 New Eligibility Form Submission",
            `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
      <h2 style="color:#2c3e50;">New Eligibility Form Submission</h2>
      <p>A new eligibility form has been submitted with the following details:</p>

      <table style="border-collapse: collapse; width: 100%; margin-top: 15px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>Name</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${doc.foreName} ${doc.surName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>Email</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${doc.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>Phone</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${doc.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>Post Code</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${doc.postCode}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>Town</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${doc.town}</td>
        </tr>
      </table>

      <p style="margin-top: 20px;">
        🔗 <a href="${process.env.ADMIN_DASHBOARD}" style="color:#2980b9; text-decoration:none; font-weight:bold;">
        Visit Admin Panel to view full details</a>
      </p>

      <p style="margin-top: 30px; font-size: 14px; color:#555;">
        Regards,<br/>
        <b>Retrofix Solutions – System Notification</b>
      </p>
    </div>
  `,
            `New Eligibility Form Submission:

Name: ${doc.foreName} ${doc.surName}
Email: ${doc.email}
Phone: ${doc.phone}
Post Code: ${doc.postCode}
Town: ${doc.town}

You can view full details in the Admin Dashboard:
${process.env.ADMIN_DASHBOARD}`
        );




        res.status(200).json({ message: "Eligibility form submitted successfully" });
    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ GET all eligibility forms
router.get("/", async (req, res) => {
    try {
        const forms = await EligibilityForm.find().sort({ createdAt: -1 });
        res.json({ success: true, data: forms });
    } catch (error) {
        console.error("Error fetching eligibility forms:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ✅ GET single file by formId + fileId
router.get("/:formId/file/:fileId", async (req, res) => {
    try {
        const { formId, fileId } = req.params;
        const form = await EligibilityForm.findById(formId);
        if (!form) return res.status(404).json({ error: "Form not found" });

        let fileDoc = null;

        // search through file groups
        for (const group of Object.values(form.files)) {
            const found = group.find((f) => f._id.toString() === fileId);
            if (found) {
                fileDoc = found;
                break;
            }
        }

        if (!fileDoc) return res.status(404).json({ error: "File not found" });

        res.set("Content-Type", fileDoc.file_mime);
        res.send(fileDoc.file_data);
    } catch (error) {
        console.error("Error fetching file:", error);
        res.status(500).json({ error: "Server error" });
    }
});



module.exports = router;
