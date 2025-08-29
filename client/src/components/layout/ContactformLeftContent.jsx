import ContactForm from "./Contactform"
import {
    LocalizationProvider,
    DatePicker,
    TimePicker,
} from '@mui/x-date-pickers';
import 'react-phone-input-2/lib/style.css';
import {
    Box,
    TextField,
    Button,
    MenuItem,
    Typography,
    useTheme,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import backgroundImg from '../../assets/CONTACT3.jpg'; // <-- Import your image here, adjust path
function ContactformLeftContent() {
    const theme = useTheme();
    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 8,
                    width: theme.layout?.maxContentWidth || '100%',
                    maxWidth: theme.layout?.maxContentWidth || '100%',
                    mx: 'auto',
                    mt: 6,
                    px: 2,
                    flexWrap: 'wrap',
                }}
            >
                {/* Left side text with background image */}
                <Box
                    sx={{
                        flex: 1,
                        mt: '200px',
                        minWidth: 280,
                        maxWidth: 450,
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        borderRadius: 7,
                        color: '#fff',
                        padding: 3,
                        pb: 8,
                        position: 'relative',
                        backgroundImage: `url(${backgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            bgcolor: 'rgba(0.1, 0.1, 0, 0.8)',
                            borderRadius: 8,
                            zIndex: 1,
                        },
                        '& > *': {
                            position: 'relative',
                            zIndex: 2,
                        },
                    }}
                >
                    <Typography variant="h5" fontWeight={800} mb={2} fontSize={40} pt={3} pb={3} color='#ff6600'>
                        Our Support
                    </Typography>
                    <Typography variant="h6" fontWeight={600} mb={4} fontSize={22} >
                        Home improvements services
                    </Typography>
                    <Typography mb={3} fontSize={15} color='#f1f1f1'>
                        Get in touch with us for expert advice and personalized solutions
                        tailored to your needs. Our friendly team is here to help you with
                        any questions or inquiries—reach out today!
                    </Typography>


                    <Typography color="text.default" mb={0.5} fontSize={14} mt={7}>Unit 7B, The Charter Building,</Typography>
                    <Typography color="text.default" mb={0.5} fontSize={14}>The Charter Walk, Stratford,</Typography>
                    <Typography color="text.default" mb={3} fontSize={14}>London E15 1XD</Typography>

                    <Typography fontWeight={600} mb={1}>
                        {/* Phone */}
                    </Typography>
                    <Typography
                        mb={3}
                        component="a"
                        href="tel:+442012345678"
                        sx={{
                            color: '#fff',
                            // textDecoration: 'underline',
                            '&:hover': {
                                color: '#ff6600', // light blue on hover
                                cursor: 'pointer',
                                textDecoration: 'none',
                            },
                        }}
                    >
                        +44 20 1234 5678
                    </Typography>

                    <Typography fontWeight={600} mb={1} mt={2}>
                        {/* Email */}
                    </Typography>
                    <Typography
                        mb={3}
                        component="a"
                        href="mailto:info@gocconstructions.co.uk"
                        sx={{
                            color: '#fff',
                            // textDecoration: 'underline',
                            '&:hover': {
                                color: '#ff6600', // light blue on hover
                                cursor: 'pointer',
                                textDecoration: 'none',
                            },
                        }}
                    >
                        info@gocconstructions.co.uk
                    </Typography>
                </Box>


                {/* Right side form */}
                <ContactForm />
            </Box>
        </LocalizationProvider>
    )
}

export default ContactformLeftContent