const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file_name: String,
    file_data: Buffer,        // actual binary data
    file_mime: String,        // e.g. 'image/png'
    uploaded_at: { type: Date, default: Date.now },
});

const eligibilitySchema = new mongoose.Schema({
    doorNo: String,
    address: String,
    postCode: String,
    town: String,
    foreName: String,
    surName: String,
    phone: String,
    email: String,
    dob: String,
    loftYear: String,
    benefitsClaimed: String,
    houseType: String,
    wallType: String,
    heatingAge: String,
    questions: mongoose.Schema.Types.Mixed,

    files: {
        frontElevation: [fileSchema],
        backElevation: [fileSchema],
        sideElevation: [fileSchema],
        boiler: [fileSchema],
        loft: [fileSchema],
    },
});

module.exports = mongoose.model("EligibilityForm", eligibilitySchema);
