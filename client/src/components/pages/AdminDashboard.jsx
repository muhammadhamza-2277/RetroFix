// AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    useTheme
} from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

function TabPanel({ children, value, index }) {
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}


export default function AdminDashboard() {
    const theme = useTheme();
    const Navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [contacts, setContacts] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLogout = () => {
        // Clear the session storage
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
        // Redirect to login page
        Navigate('/admin/login');
    };
    // fetch contacts data
    useEffect(() => {
        if (value === 1) {
            fetch("https://retrofix.onrender.com/api/contacts")
                .then((res) => res.json())
                .then((data) => {
                    setContacts(data.data || []); // ✅ extract "data"
                })
                .catch((err) => console.error("Error fetching contacts:", err));
        }
    }, [value]);


    const [careerForms, setCareerForms] = useState([]);

    useEffect(() => {
        if (value === 2) {
            fetch("https://retrofix.onrender.com/api/apply")
                .then((res) => res.json())
                .then((data) => setCareerForms(data.data || []))
                .catch((err) => console.error("Error fetching career forms:", err));
        }
    }, [value]);

    const [eligibilityForms, setEligibilityForms] = useState([]);

    useEffect(() => {
        if (value === 0) {   // ✅ Only fetch when Eligibility tab is selected
            fetch("https://retrofix.onrender.com/api/eligibility")
                .then((res) => res.json())
                .then((data) => {
                    setEligibilityForms(data.data || []);
                })
                .catch((err) => console.error("Error fetching eligibility forms:", err));
        }
    }, [value]);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // open gallery for a group of images
    const handleOpenGallery = (files, startIndex = 0, formId) => {
        setLightboxSlides(
            files.map((file) => ({
                src: `https://retrofix.onrender.com/api/eligibility/${formId}/file/${file._id}`,
            }))
        );
        setLightboxIndex(startIndex);
        setLightboxOpen(true);
    };

    return (
        <>

            <Box sx={{ maxWidth: "1200px", mt: 5, mx: 'auto' }}>


                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: theme.palette.background.primary,
                            height: 3,
                        },
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 500,
                            minWidth: 'unset',
                            padding: '12px 16px',
                            '&.Mui-selected': {
                                color: theme.palette.background.primary,
                            },
                        },
                    }}
                >
                    <Tab label="Eligibility Forms" />
                    <Tab label="Contact Forms" />
                    <Tab label="Career Forms" />
                    <Tab
                        label="LOGOUT"
                        sx={{
                            border: '2px solid blue',
                            borderBottom: 'none',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            color: theme.palette.text.primary,
                            margin: '0 4px',

                            '&.Mui-selected': {
                                // backgroundColor: '#2473c9',
                                color: '#ffffff',
                                borderColor: blue,
                            },
                        }}
                    />
                </Tabs>

                {/* Eligibility Forms Tab */}
                <TabPanel value={value} index={0}>
                    <Typography variant="h5" gutterBottom>
                        Eligibility Forms Data
                    </Typography>

                    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Door No</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Post Code</TableCell>
                                    <TableCell>Town</TableCell>
                                    <TableCell>Fore Name</TableCell>
                                    <TableCell>Sur Name</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>DOB</TableCell>
                                    <TableCell>House Type</TableCell>
                                    <TableCell>Wall Type</TableCell>
                                    <TableCell>Heating Age</TableCell>
                                    <TableCell>Benefits Claimed</TableCell>
                                    <TableCell>Loft Year</TableCell>
                                    <TableCell sx={{ minWidth: 300 }}>Questions</TableCell>
                                    <TableCell>Front Elevation</TableCell>
                                    <TableCell>Back Elevation</TableCell>
                                    <TableCell>Side Elevation</TableCell>
                                    <TableCell>Boiler</TableCell>
                                    <TableCell>Loft</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {eligibilityForms.map((form, idx) => (
                                    <TableRow key={form._id}>
                                        <TableCell>{idx + 1}</TableCell>
                                        <TableCell>{form.doorNo}</TableCell>
                                        <TableCell>{form.address}</TableCell>
                                        <TableCell>{form.postCode}</TableCell>
                                        <TableCell>{form.town}</TableCell>
                                        <TableCell>{form.foreName}</TableCell>
                                        <TableCell>{form.surName}</TableCell>
                                        <TableCell>{form.phone}</TableCell>
                                        <TableCell>{form.email}</TableCell>
                                        <TableCell>{form.dob}</TableCell>
                                        <TableCell>{form.houseType}</TableCell>
                                        <TableCell>{form.wallType}</TableCell>
                                        <TableCell>{form.heatingAge}</TableCell>
                                        <TableCell>{form.benefitsClaimed}</TableCell>
                                        <TableCell>{form.loftYear}</TableCell>
                                        <TableCell>
                                            {form.questions &&
                                                Object.entries(form.questions).map(([q, a]) => (
                                                    <div key={q}>
                                                        <strong>{q}:</strong> {a}
                                                    </div>
                                                ))}
                                        </TableCell>

                                        {/* File Groups */}
                                        {["frontElevation", "backElevation", "sideElevation", "boiler", "loft"].map(
                                            (group) => (
                                                <TableCell key={group}>
                                                    {form.files && form.files[group] && form.files[group].length > 0 ? (
                                                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                                            {form.files[group].map((file, i) => (
                                                                <Box key={file._id} sx={{ textAlign: "center" }}>
                                                                    <img
                                                                        src={`https://retrofix.onrender.com/api/eligibility/${form._id}/file/${file._id}`}
                                                                        alt={file.file_name}
                                                                        style={{
                                                                            width: "80px",
                                                                            height: "80px",
                                                                            objectFit: "cover",
                                                                            borderRadius: 4,
                                                                            cursor: "pointer",
                                                                        }}
                                                                        onClick={() =>
                                                                            handleOpenGallery(form.files[group], i, form._id)
                                                                        }
                                                                    />
                                                                    <Button
                                                                        variant="contained"
                                                                        size="small"
                                                                        component="a"
                                                                        href={`https://retrofix.onrender.com/api/eligibility/${form._id}/file/${file._id}`}
                                                                        download={file.file_name}
                                                                        sx={{ mt: 0.5 }}
                                                                    >
                                                                        Download
                                                                    </Button>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    ) : (
                                                        "No files"
                                                    )}
                                                </TableCell>
                                            )
                                        )}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Lightbox */}
                    <Lightbox
                        open={lightboxOpen}
                        close={() => setLightboxOpen(false)}
                        index={lightboxIndex}
                        slides={lightboxSlides}
                    />
                </TabPanel>


                {/* Contact Forms Tab */}
                <TabPanel value={value} index={1}>
                    <Typography variant="h5" gutterBottom>
                        Contact Forms Data
                    </Typography>

                    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Service Type</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Message</TableCell>
                                    <TableCell>Created At</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contacts.map((c) => (
                                    <TableRow key={c._id}>
                                        <TableCell>{c._id}</TableCell>
                                        <TableCell>{c.firstName}</TableCell>
                                        <TableCell>{c.lastName}</TableCell>
                                        <TableCell>{c.email}</TableCell>
                                        <TableCell>{c.phone}</TableCell>
                                        <TableCell>
                                            {new Date(c.date).toLocaleDateString()}
                                        </TableCell>
                                        <TableCell>{c.time}</TableCell>
                                        <TableCell>{c.serviceType}</TableCell>
                                        <TableCell>{c.address}</TableCell>
                                        <TableCell>{c.message}</TableCell>
                                        <TableCell>
                                            {new Date(c.createdAt).toLocaleString()}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                {/* apply Forms Tab */}
                <TabPanel value={value} index={2}>
                    <Typography variant="h5" gutterBottom>
                        Career Forms Data
                    </Typography>

                    <TableContainer component={Paper} sx={{ mt: 2, maxHeight: 500 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>ID</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Nationality</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Work Experience</TableCell>
                                    <TableCell>Earliest Join Date</TableCell>
                                    <TableCell>Department Interest</TableCell>
                                    <TableCell>Submitted At</TableCell>
                                    <TableCell>Documents</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {careerForms.map((form, index) => (
                                    <TableRow key={form._id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{form._id}</TableCell>
                                        <TableCell>{form.first_name}</TableCell>
                                        <TableCell>{form.last_name}</TableCell>
                                        <TableCell>{form.gender}</TableCell>
                                        <TableCell>{form.nationality}</TableCell>
                                        <TableCell>{form.email}</TableCell>
                                        <TableCell>{form.phone}</TableCell>
                                        <TableCell>{form.work_experience}</TableCell>
                                        <TableCell>{form.earliest_join_date}</TableCell>
                                        <TableCell>{form.department_interest}</TableCell>

                                        <TableCell>
                                            {new Date(form.submitted_at).toLocaleString()}
                                        </TableCell>
                                        <TableCell>
                                            {form.documents && form.documents.length > 0 ? (
                                                <Box sx={{ display: "flex", gap: 2 }}>
                                                    {form.documents.map((doc) => (
                                                        <Box
                                                            key={doc._id}
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                alignItems: "center",
                                                                gap: 1,
                                                            }}
                                                        >
                                                            {/* Preview / View button */}
                                                            <Button
                                                                variant="contained"
                                                                size="small"
                                                                href={`https://retrofix.onrender.com/api/apply/${form._id}/file/${doc._id}`}
                                                                target="_blank"
                                                            >
                                                                View
                                                            </Button>

                                                            {/* Download button */}
                                                            <Button
                                                                variant="outlined"
                                                                size="small"
                                                                href={`https://retrofix.onrender.com/api/apply/${form._id}/file/${doc._id}`}
                                                                download
                                                            >
                                                                Download
                                                            </Button>

                                                            {/* Inline preview if it's PDF */}
                                                            {doc.file_mime === "application/pdf" && (
                                                                <iframe
                                                                    src={`https://retrofix.onrender.com/api/apply/${form._id}/file/${doc._id}`}
                                                                    title={doc.file_name}
                                                                    width="200"
                                                                    height="150"
                                                                    style={{ border: "1px solid #ccc" }}
                                                                />
                                                            )}
                                                        </Box>
                                                    ))}
                                                </Box>
                                            ) : (
                                                "No documents"
                                            )}
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>


                <TabPanel value={value} index={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Box>
                </TabPanel>

            </Box>
        </>
    );
}
