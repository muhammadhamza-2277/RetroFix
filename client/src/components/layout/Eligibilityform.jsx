import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  MenuItem,
  Button,
} from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'; // keep base styles

const Label = ({ text, required }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
    <Typography
      sx={{
        fontSize: 16,
        fontFamily: "Roboto, sans-serif",
        color: "#333",
        fontWeight: 550,

      }}
    >
      {text}
    </Typography>
    {required && (
      <Typography sx={{ color: "red", ml: 0.3, fontSize: 18 }}>*</Typography>
    )}
  </Box>
);

const Input = (props) => (
  <TextField
    size="small"
    fullWidth
    variant="outlined"
    InputProps={{
      sx: {
        height: 45,
        borderRadius: 1,
        fontSize: 17,
        fontFamily: "Roboto, sans-serif",
        mb: 2.5,
      },
    }}
    {...props}
  />
);

export default function MyForm() {

  const phoneInputRef = useRef(null);
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);

  const handleCountryChange = () => {
    setTimeout(() => {
      if (phoneInputRef.current?.input) {
        phoneInputRef.current.input.focus();
      }
    }, 0);
  };

  // ---------------- State ----------------
  const [formData, setFormData] = useState({
    doorNo: "", address: "", postCode: "", town: "",
    foreName: "", surName: "", phone: "", email: "",
    dob: "", benefitsClaimed: "", houseType: "",
    wallType: "", heatingAge: "", loftYear: "",
    questions: {}
  });

  const [files, setFiles] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // state for radio answers
  const [radioAnswers, setRadioAnswers] = useState({});

  // generic handler
  const handleRadioChange = (question, value) => {
    setRadioAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // ✅ prevent multiple clicks

    // 1. Build payload
    const payload = {
      ...formData,
      phone,
      benefitsClaimed,
      houseType,
      wallType,
      heatingAge,
      questions: radioAnswers,
    };

    // 2. Create FormData
    const formDataToSend = new FormData();

    // append text fields
    Object.entries(payload).forEach(([key, value]) => {
      if (typeof value === "object") {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        formDataToSend.append(key, value);
      }
    });

    const keyMap = {
      "Front Elevation *": "frontElevation",
      "Back Elevation *": "backElevation",
      "Side Elevation *": "sideElevation",
      "Boiler *": "boiler",
      "Loft *": "loft",
    };

    Object.entries(files).forEach(([label, fileList]) => {
      const key = keyMap[label] || label.replace(/\s+/g, "");
      fileList.forEach((file) => {
        formDataToSend.append(key, file);
      });
    });

    // 3. Debug log
    console.log("➡️ Submitting Eligibility Form...");
    for (let [key, value] of formDataToSend.entries()) {
      if (value instanceof File) {
        console.log(`📂 File field: ${key}`, {
          name: value.name,
          size: value.size,
          type: value.type,
        });
      } else {
        console.log(`📝 Field: ${key} = ${value}`);
      }
    }

    // 4. Submit
    try {
      const response = await fetch("https://retrofix.onrender.com/api/eligibility", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Form submitted successfully!");

        // ✅ Reset text-based state
        setFormData({
          foreName: "",
          surName: "",
          email: "",
          phone: "+44", // or empty if you prefer
          dob: "",
          address: "",
          postCode: "",
          town: "",
          loftYear: "",
          benefitsClaimed: "",
          houseType: "",
          wallType: "",
          heatingAge: "",
          questions: {}, // reset your radioAnswers too
        });

        // ✅ Reset files state
        setFiles({
          "Front Elevation *": [],
          "Back Elevation *": [],
          "Side Elevation *": [],
          "Boiler *": [],
          "Loft *": [],
        });

        // ✅ Reset any extra states
        setPhone("+44");
        setRadioAnswers({});
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("❌ Server error:", errorData);
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("🌐 Network error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false); // re-enable button
    }
  };




  // State for dropdowns
  const [benefitsClaimed, setBenefitsClaimed] = useState("");
  const [houseType, setHouseType] = useState("");
  const [wallType, setWallType] = useState("");
  const [heatingAge, setHeatingAge] = useState("");

  const fileInputRefs = useRef({});

  const handleClick = (label) => {
    if (fileInputRefs.current[label]) {
      fileInputRefs.current[label].click();
    }
  };

  const handleFileChange = (e, label) => {
    const files = Array.from(e.target.files);

    // ✅ Max 3 files
    if (files.length > 3) {
      alert("You can upload a maximum of 3 files.");
      e.target.value = null;
      return;
    }

    // ✅ Only images
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length !== files.length) {
      alert("Only image files are allowed!");
      e.target.value = null;
      return;
    }

    // ✅ Each file ≤ 1MB
    const validFiles = imageFiles.filter((file) => file.size <= 1024 * 1024);
    if (validFiles.length !== imageFiles.length) {
      alert("Each file must be less than or equal to 1MB.");
      e.target.value = null;
      return;
    }

    // ✅ Save valid files
    setFiles((prev) => ({ ...prev, [label]: validFiles }));
  };



  const uploadLabels = [
    "Front Elevation *",
    "Back Elevation *",
    "Side Elevation *",
    "Boiler *",
    "Loft *",
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 900,
        mx: "auto",
        my: 5,
        p: 3,
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: "0px 1px 10px rgba(0,0,0,0.1)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Address */}
      <Typography sx={{ fontWeight: 600, mb: 4, fontSize: 28 }}>Address</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Door No" required />
          <Input
            placeholder="Door No"
            type='number'
            value={formData.doorNo}
            onChange={(e) => handleChange("doorNo", e.target.value)}
            required
          />
        </Box>
        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Address" required />
          <Input
            placeholder="Address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            required
          />
        </Box>
        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Post Code" required />
          <Input
            placeholder="Post Code"
            value={formData.postCode}
            onChange={(e) => handleChange("postCode", e.target.value)}
            required
          />
        </Box>
        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Town" required />
          <Input
            placeholder="Town"
            value={formData.town}
            onChange={(e) => handleChange("town", e.target.value)}
            required
          />
        </Box>
      </Box>


      <Divider sx={{ my: 3 }} />

      {/* Personal Details */}
      <Typography sx={{ fontWeight: 600, mb: 4, fontSize: 28 }}>
        Personal Details
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Fore Name" required />
          <Input
            placeholder="Fore Name"
            value={formData.foreName}
            onChange={(e) => handleChange("foreName", e.target.value)}
            required
          />
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Sur Name" required />
          <Input
            placeholder="Sur Name"
            value={formData.surName}
            onChange={(e) => handleChange("surName", e.target.value)}
            required
          />
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Phone" required />
          <PhoneInput
            ref={phoneInputRef}
            country={'pk'}
            value={phone} // ✅ controlled value
            onChange={(value) => setPhone(value)} // ✅ store phone in state
            inputProps={{
              required: true,
              name: 'phone', // will still send in formData
            }}
            onCountryChange={handleCountryChange}
            inputStyle={{
              width: '100%',
              height: '56px',
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,0.23)',
            }}
            placeholder="Enter phone number"
          />
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Email" required />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Date of Birth" required />
          <Input
            type="date"
            value={formData.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            required
          />
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Benefits Claimed" required />
          <TextField
            select
            size="small"
            fullWidth
            variant="outlined"
            value={benefitsClaimed}
            onChange={(e) => setBenefitsClaimed(e.target.value)}
            required
            InputProps={{
              sx: {
                height: 38,
                fontSize: 13,
                fontFamily: "Roboto, sans-serif",
              },
            }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Child Tax Certificat">Child Tax Certificat</MenuItem>
            <MenuItem value="Income Related employment and support allowance">
              Income Related employment and support allowance
            </MenuItem>
            <MenuItem value="Income based job seeker allowance">
              Income based job seeker allowance
            </MenuItem>
            <MenuItem value="Income support">Income support</MenuItem>
            <MenuItem value="Pension Credit">Pension Credit</MenuItem>
            <MenuItem value="Universal Credit">Universal Credit</MenuItem>
            <MenuItem value="Housing Benefits">Housing Benefits</MenuItem>
          </TextField>
        </Box>
      </Box>


      <Divider sx={{ my: 3 }} />

      {/* Property Details */}
      <Typography sx={{ fontWeight: 600, mb: 4, fontSize: 28 }}>
        Property Details
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="House Type" required />
          <TextField
            select
            size="small"
            fullWidth
            value={houseType}
            onChange={(e) => setHouseType(e.target.value)}
            required
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Detached">Detached</MenuItem>
            <MenuItem value="Semi-Detached">Semi-Detached</MenuItem>
            <MenuItem value="Terraced">Terraced</MenuItem>
            <MenuItem value="Flat">Flat</MenuItem>
          </TextField>
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Wall Type" required />
          <TextField
            select
            size="small"
            fullWidth
            value={wallType}
            onChange={(e) => setWallType(e.target.value)}
            required
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Cavity">Cavity</MenuItem>
            <MenuItem value="Solid">Solid</MenuItem>
            <MenuItem value="Timber Frame">Timber Frame</MenuItem>
          </TextField>
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Age of Heating System" required />
          <TextField
            select
            size="small"
            fullWidth
            value={heatingAge}
            onChange={(e) => setHeatingAge(e.target.value)}
            required
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="0-5 years">0-5 years</MenuItem>
            <MenuItem value="5-10 years">5-10 years</MenuItem>
            <MenuItem value="10-15 years">10-15 years</MenuItem>
            <MenuItem value="15-20 years">15-20 years</MenuItem>
            <MenuItem value="20+ years">more than 20 years</MenuItem>
          </TextField>
        </Box>

        <Box sx={{ flex: "1 1 calc(50% - 8px)" }}>
          <Label text="Loft Insulation Year" required />
          <Input
            type="number"
            placeholder="How old is the loft insulation? (Year)"
            inputProps={{ min: 1900, max: new Date().getFullYear() }}
            value={formData.loftYear}
            onChange={(e) => handleChange("loftYear", e.target.value)}
          />

        </Box>
      </Box>


      {/* Yes/No Questions */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, pt: 7 }}>
        {[
          "Do you have a water cylinder?",
          "Do you have a boiler?",
          "Is there any extension attached to the property?",
          "Do you have solar panels?",
          "Does property have an EPC?",
          "Is the property rented?",
        ].map((question, idx) => (
          <Box
            key={idx}
            sx={{
              flex: "1 1 calc(50% - 8px)",
              minWidth: 240,
            }}
          >
            <Label text={question} required />
            <RadioGroup
              row
              onChange={(e) => handleRadioChange(question, e.target.value)}
              required
            >
              <FormControlLabel
                value="yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </Box>
        ))}
      </Box>

      {/* Evidence Section */}
      <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold", fontSize: 28, mt: 6 }}>
        Evidence
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', gap: 4, mb: 4, }}>
        {uploadLabels.map((label) => (
          <Box
            key={label}
            onClick={() => handleClick(label)}
            sx={{
              border: "2px dashed #ccc",
              borderRadius: 2,
              p: 2,
              width: "100%",
              minHeight: 120,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Typography sx={{ fontWeight: 520, mb: 1, fontSize: 20 }}>
              {label}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "text.secondary",
                fontSize: 13,
                gap: 1,
              }}
            >


              {files[label] && files[label].length > 0 ? (
                <>
                  <CloudUploadOutlinedIcon sx={{ fontSize: 44, color: 'background.primary' }} />
                  <Typography textAlign="center" variant="body2" color="background.primary">
                    {files[label].length} file{files[label].length > 1 ? "s" : ""} selected
                  </Typography>
                </>
              ) : (
                <>
                  <CloudUploadOutlinedIcon sx={{ fontSize: 44, }} />
                  <Typography textAlign="center" variant="body2" color="textSecondary">
                    Click or drag files to this area to upload.
                    <br /> You can upload up to 3 files.
                  </Typography>
                </>
              )}
            </Box>

            {/* Hidden file input */}
            <input
              type="file"
              multiple
              accept="image/*"
              style={{ display: "none" }}
              ref={(el) => (fileInputRefs.current[label] = el)}
              onChange={(e) => handleFileChange(e, label)}
              required
            />
          </Box>

        ))}
      </Box>

      {/* Submit button */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center', mt: 4,
      }}>
        <Button
          variant="filled"
          type="submit"
          disabled={loading}
          sx={{

            px: 10
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </Box>

    </Box >
  );
}
