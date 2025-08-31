import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';



const serviceTypes = [
  'External Wall Insulation',
  'Internal Wall Insulation',
  'Loft Insulation',
  'Air Source Heat Pumps',
  'Solar Panels',
  'Boiler Upgrade',
];

export default function ContactForm() {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+44',
    date: null,
    time: null,
    serviceType: '',
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.phone || form.phone.replace(/\D/g, '').length < 6) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.time) newErrors.time = 'Time is required';
    if (!form.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = (newValue) => {
    setForm((prev) => ({ ...prev, date: newValue }));
  };

  const handleTimeChange = (newValue) => {
    setForm((prev) => ({ ...prev, time: newValue }));
  };

  const handlePhoneChange = (value) => {
    if (!value) {
      setForm((prev) => ({ ...prev, phone: '+44' }));
    } else {
      setForm((prev) => ({ ...prev, phone: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // ✅ prevent multiple clicks

    if (!validate()) return;

    const payload = {
      ...form,
      date: form.date ? form.date.toISOString() : null,
      time: form.time
        ? form.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : null
    };

    console.log("📤 Payload being sent to backend:", payload);

    try {
      const res = await fetch('https://retrofix.onrender.com/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      console.log("📥 Raw response object:", res);

      const data = await res.json();
      console.log("📥 Parsed backend response:", data);

      if (data.success) {
        alert('Form submitted successfully!');
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '+44',
          date: null,
          time: null,
          serviceType: '',
          address: '',
          message: '',
        });
        setErrors({});
      } else {
        alert('Error: ' + (data.message || 'Something went wrong'));
      }
    } catch (error) {
      console.error("❌ Network or fetch error:", error);
      alert('Error: ' + error.message);
    }
  };


  const sharedInputBox = {
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%', // let it shrink on small screens
          maxWidth: { xs: '100%', sm: 500, md: 700 }, // full width on mobile, 500px on small, 700px on md+
          mx: 'auto',
          mt: 6,
          px: { xs: 2, sm: 4, md: 5 }, // smaller padding on mobile
          py: { xs: 3, sm: 4, md: 6 },
          boxShadow: 4,
          borderRadius: 3,
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,

        }}
        noValidate
      >
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ fontWeight: 700 }}>
          Contact Us
        </Typography>

        {/* Row 1: First Name + Last Name */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={sharedInputBox}>
            <TextField
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Box>
          <Box sx={sharedInputBox}>
            <TextField
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Box>
        </Box>

        {/* Row 2: Email + Phone */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={sharedInputBox}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>
          <Box sx={sharedInputBox}>
            <PhoneInput
              country={'gb'}
              value={form.phone}
              onChange={handlePhoneChange}
              inputStyle={{ width: '100%', height: '56px', fontSize: '1rem' }}
              buttonStyle={{ border: 'none', background: 'transparent' }}
              enableSearch
            />
            {errors.phone && (
              <Typography variant="caption" color="error">
                {errors.phone}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Row 3: Date + Time */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={sharedInputBox}>
              <DatePicker
                label="Date"
                value={form.date}
                onChange={handleDateChange}
                slotProps={{
                  textField: {
                    error: !!errors.date,
                    helperText: errors.date,
                  },
                }}
              />
            </Box>
            <Box sx={sharedInputBox}>
              <TimePicker
                label="Time"
                value={form.time}
                onChange={handleTimeChange}
                slotProps={{
                  textField: {
                    error: !!errors.time,
                    helperText: errors.time,
                  },
                }}
              />
            </Box>
          </Box>
        </LocalizationProvider>

        {/* Row 4: Type of Service */}
        <TextField
          select
          label="Type of Service"
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          error={!!errors.serviceType}
          helperText={errors.serviceType}
        >
          <MenuItem value="">Select Service</MenuItem>
          {serviceTypes.map((service, idx) => (
            <MenuItem key={idx} value={service}>
              {service}
            </MenuItem>
          ))}
        </TextField>

        {/* Row 5: Address */}
        <TextField
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />

        {/* Row 6: Message */}
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
        />

        {/* Row 7: Submit */}
        <Button
          variant="filled"
          type="submit"
          disabled={loading}
          sx={{
            // backgroundColor: theme.palette.primary.main,
            // color: '#fff',
            // py: 1.5,
            // fontSize: '1rem',
            width: '100%',
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </Box>

    </>
  );
}
