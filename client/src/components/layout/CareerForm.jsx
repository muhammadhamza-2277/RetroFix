import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  useTheme
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // keep base styles
import CareerFormLeftSection from './CareerFormLeftSection';

const InternshipApplication = () => {
  const phoneInputRef = useRef(null);
  const theme = useTheme();
  const [humanCheck, setHumanCheck] = useState('');
  const [fileError, setFileError] = useState('');
  const [phone, setPhone] = useState('');


  const inputHeight = '56px';

  const handleFileChange = (e) => {
    const files = e.target.files;
    const MAX_FILES = 2;
    const MAX_SIZE = 2 * 1024 * 1024; // 2MB in bytes
    let errorMsg = '';

    // Check if no files selected (handled by `required` attribute)
    if (files.length === 0) {
      setFileError('');
      return;
    }

    // Check if more than 2 files
    if (files.length > MAX_FILES) {
      errorMsg = `Maximum ${MAX_FILES} files allowed.`;
      e.target.value = ""; // Clear selection
      setFileError(errorMsg);
      return;
    }

    // Check file types and sizes
    for (let file of files) {
      // Check if file is PDF
      if (!file.name.toLowerCase().endsWith('.pdf')) {
        errorMsg = 'Only PDF files are allowed.';
        break;
      }
      // Check if file exceeds size limit
      if (file.size > MAX_SIZE) {
        errorMsg = 'Each file must be less than 2MB.';
        break;
      }
    }

    // If error, reset input and show message
    if (errorMsg) {
      e.target.value = ""; // Clear invalid selection
      setFileError(errorMsg);
    } else {
      setFileError(''); // No errors, proceed
      // Handle valid files (e.g., store in state, upload, etc.)
    }
  };

  // ✅ Focus phone input after country is selected
  const handleCountryChange = () => {
    setTimeout(() => {
      if (phoneInputRef.current?.input) {
        phoneInputRef.current.input.focus();
      }
    }, 0);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (humanCheck !== '11') {
  //     alert('Please answer the human verification correctly.');
  //     return;
  //   }
  //   alert('Form submitted successfully!');
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (humanCheck !== '11') {
      alert('Please answer the human verification correctly.');
      return;
    }

    const formData = new FormData();

    // Add text fields
    formData.append('first_name', e.target.first_name.value);
    formData.append('last_name', e.target.last_name.value);
    formData.append('gender', e.target.gender.value);
    formData.append('nationality', e.target.nationality.value);
    formData.append('email', e.target.email.value);
    formData.append('phone', e.target.phone.value);
    formData.append('work_experience', e.target.work_experience.value);
    formData.append('earliest_join_date', e.target.earliest_join_date.value);
    formData.append('department_interest', e.target.department_interest.value);
    formData.append('human_check', humanCheck);

    // Add files (input name="documents")
    const files = e.target.documents.files;
    for (let i = 0; i < files.length; i++) {
      formData.append('documents', files[i]);
    }

    try {
      const res = await fetch('https://retrofix.onrender.com/api/apply', {
        method: 'POST',
        body: formData
      });

      if (!res.ok) throw new Error('Failed to submit application');

      const data = await res.json();
      alert(data.message || 'Application submitted successfully!');
    } catch (err) {
      console.error(err);
      alert('Error submitting form. Please try again.');
    }
  };


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '100vh',
        background: '#f4f4f4',
        padding: '20px',
      }}
    >
      {/*Left section*/}
      <CareerFormLeftSection />

      {/* RIGHT SECTION */}
      <Box
        sx={{
          flex: 1.1,
          p: { xs: '10px', md: '40px' }, // 👈 responsive padding
          // py: '40px',
          background: '#fff',
          borderRadius: '0px 10px 10px 0px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="First Name"
              name='first_name'
              required
              fullWidth
              placeholder="Enter your first name"
              InputProps={{ style: { height: inputHeight } }}
            />
            <TextField
              label="Last Name"
              name='last_name'
              required
              fullWidth
              placeholder="Enter your last name"
              InputProps={{ style: { height: inputHeight } }}
            />
          </Box>

          {/* Row 2 */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              select
              label="Gender"
              name='gender'
              required
              fullWidth
              defaultValue=""
              InputProps={{ style: { height: inputHeight } }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField
              select
              label="Nationality"
              name='nationality'
              required
              fullWidth
              defaultValue=""
              InputProps={{ style: { height: inputHeight } }}
            >
              <MenuItem value="Pakistani">Pakistani</MenuItem>
              <MenuItem value="Indian">Indian</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Box>

          {/* Row 3 */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Email"
              name='email'
              type="email"
              required
              fullWidth
              placeholder="example@email.com"
              InputProps={{ style: { height: inputHeight } }}
            />

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

          {/* Row 4 */}
          <TextField
            select
            label="Work Experience"
            name='work_experience'
            required
            fullWidth
            defaultValue=""
            sx={{ mb: 2 }}
            InputProps={{ style: { height: inputHeight } }}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>

          {/* Row 5 */}
          <TextField
            label="Earliest Date You Can Join?"
            name='earliest_join_date'
            required
            placeholder="e.g. September 2025 Batch"
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ style: { height: inputHeight } }}
          />

          {/* Row 6 */}
          <TextField
            select
            label="Department of Interest"
            name='department_interest'
            required
            fullWidth
            defaultValue=""
            sx={{ mb: 2 }}
            InputProps={{ style: { height: inputHeight } }}
          >
            <MenuItem value="Office Administration">Office Administration</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
            <MenuItem value="Customer Service">Customer Service</MenuItem>
            <MenuItem value="Research & Development">Research & Development</MenuItem>
            <MenuItem value="Logistics">Logistics</MenuItem>
          </TextField>

          {/* Row 7 */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Upload your CV & Passport <span style={{ color: 'red' }}>*</span>
            </Typography>
            <input
              type="file"
              name='documents'
              accept=".pdf"  // Only accept PDF files
              multiple
              max={2}  // Maximum of 2 files (note: this might not work in all browsers)
              required
              onChange={handleFileChange}
              style={{
                padding: '14px',
                border: '1px dashed #aaa',
                width: '100%',
                borderRadius: '6px',
                background: '#fafafa',
              }}
            />
            {fileError && (
              <Typography variant="body2" color="error">
                {fileError}
              </Typography>
            )}
          </Box>

          {/* Row 8 */}
          <TextField
            label="Prove you're not a robot"
            name='human_check'
            placeholder="What is 7 + 4?"
            required
            fullWidth
            value={humanCheck}
            onChange={(e) => setHumanCheck(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{ style: { height: inputHeight } }}
          />

          {/* Row 9 */}
          <Button
            type="submit"
            variant='filled'
            sx={{
              mt: 2,
              // background: 'linear-gradient(to right, #00b894, #009970)',
              // color: '#fff',
              // borderRadius: '20px',
              // fontSize: '18px',
              // padding: '14px 30px',
              width: '100%',
              '&:hover': {
                // background: 'linear-gradient(to right, #ff6600)',
              },
            }
            }
          >
            Submit
          </Button>
        </Box>
      </Box>

    </Box>
  );
};

export default InternshipApplication;
