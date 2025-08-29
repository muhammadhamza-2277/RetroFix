
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');
const careerRoutes = require('./routes/careerRoutes');
const eligibilityRoutes = require("./routes/eligibilityRoutes");
const admin = require('./routes/admin')
require('dotenv').config();

const app = express();
app.use(express.json());

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));


// MongoDB Connection (local)
mongoose.connect('mongodb://127.0.0.1:27017/forms', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/apply', careerRoutes);
app.use("/api/eligibility", eligibilityRoutes);
app.use("/api/admin", admin);

app.get('/', (req, res) => {
    res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
