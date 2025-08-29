const mongoose = require('mongoose');

const internshipApplicationSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    nationality: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    },
    phone: {
        type: String,
        required: true
    },
    work_experience: {
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },
    earliest_join_date: {
        type: String, // Could be Date if you want strict date parsing
        required: true
    },
    department_interest: {
        type: String,
        required: true
    },
    documents: [
        {
            file_name: String,
            file_data: Buffer,  // actual PDF data
            file_mime: String,  // 'application/pdf'
            uploaded_at: { type: Date, default: Date.now }
        }
    ],
    human_check: {
        type: String,
        required: true
    },
    submitted_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('InternshipApplication', internshipApplicationSchema);
