import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Link as RouterLink } from "react-router-dom";

const stats = [
    {
        icon: LocalPhoneOutlinedIcon,
        label: 'OFFICE PHONE',
        value: '+44 1204 774500',
        color: 'primary.main',
    },
    {
        icon: MailOutlineIcon,
        label: 'OFFICE EMAIL',
        value: 'info@retrofixsolutions.co.uk',
        color: 'secondary.main',
    },
    {
        icon: AccessTimeOutlinedIcon,
        label: 'ADDRESS',
        value: 'Unit 8, Reaymer close, Bloxwich , Walsall, WS2 7QZ',
        color: 'warning.main',
    },
];

const Footer = () => {
    const theme = useTheme();

    const footerLinks = [
        { label: "Home", path: "/home" },
        { label: "About", path: "/about" },
        { label: "Career", path: "/career" },
        { label: "Contact Us", path: "/contact" },
    ];

    const services = [
        { label: "External Wall Insulation", path: "/grants/ewi" },
        { label: "Internal Wall Insulation", path: "/grants/iwi" },
        { label: "Air Source Heat Pumps", path: "/grants/ashp" },
        { label: "Loft Insulation", path: "/grants/loft" },
        { label: "Boiler Upgrade", path: "/grants/boiler" },
    ];

    const solutionsLinks = [
        { label: "Check Eligibility", path: "/check-eligibility" },
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "About Us", path: "/about" },
        { label: "Contact Us", path: "/contact" },
    ];
    return (
        <Box
            sx={{
                bgcolor: 'background.footer',
                color: 'text.default',
                pt: 6,
                pb: 3,
            }}>
            <Container
                sx={{ mx: 'auto', maxWidth: theme.layout?.maxContentWidth }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: 4,
                        mb: 4,
                        // backgroundColor: 'background.paper',
                        borderRadius: 2,
                        // boxShadow: 3,
                        textAlign: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.56)',
                    }}
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <Box
                                key={i}
                                sx={{
                                    width: { xs: '100%', sm: '100%', md: '330px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    //   backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: 2,
                                    p: 2,

                                }}
                            >
                                <Icon
                                    sx={{
                                        fontSize: 36,
                                        color: 'text.default',
                                        backgroundColor: 'background.secondary',
                                        p: 1,
                                        boxSizing: 'content-box',
                                        borderRadius: 4,
                                        flexShrink: 0
                                    }} />
                                <Box sx={{ textAlign: 'left' }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={500}
                                        sx={{ color: 'white' }}
                                    >
                                        {stat.label === 'OFFICE EMAIL' ? (
                                            <a
                                                href={`mailto:${stat.value}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: 'inherit', textDecoration: 'none' }}
                                            >
                                                {stat.value}
                                            </a>
                                        ) : (
                                            stat.value
                                        )}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>



                <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    {/* Column 1: GOC Branding */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '240px' }}>
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.text.secondary }}>
                                    Retrofixs
                                </Typography>
                                <Typography variant="h2" sx={{ color: 'text.default' }}>
                                    Solutions
                                </Typography>
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 2,
                                    color: '#ccc',
                                    flexGrow: 1,
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word',
                                    lineHeight: 1.6,
                                    maxWidth: '260px' // optional, limit line length
                                }}
                            >
                                Choose us for your home improvement needs because we combine expertise with a commitment to quality. Trust us to enhance your home while reducing your carbon footprint!
                            </Typography>


                            <Box sx={{ mt: 2, display: "flex", gap: 1.5 }}>
                                {[
                                    { icon: <Instagram />, link: "#" },
                                    { icon: <Facebook />, link: "#" },
                                    { icon: <Twitter />, link: "#" },
                                ].map((item, index) => (
                                    <IconButton
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: "#fff",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                color: "background.primary", // pick your universal hover color
                                                transform: "scale(1.2)",
                                                backgroundColor: 'text.default'
                                            },
                                        }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                ))}
                            </Box>

                        </Box>
                    </Grid>

                    {/* Column 2: Menu */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                minHeight: "240px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    borderBottom: (theme) => `2px solid ${theme.palette.text.secondary}`,
                                    pb: 0.5,
                                    display: "inline-block",
                                }}
                            >
                                Menu
                            </Typography>

                            {footerLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                    underline="none"
                                    color="#ccc"
                                    display="block"
                                    sx={{
                                        mt: 1,
                                        "&:hover": { color: "white" }, // nice hover effect
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Column 3: Services */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                minHeight: "240px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    borderBottom: (theme) => `2px solid ${theme.palette.text.secondary}`,
                                    pb: 0.5,
                                    display: "inline-block",
                                }}
                            >
                                Our Services
                            </Typography>

                            {services.map((service) => (
                                <Link
                                    key={service.label}
                                    component={RouterLink}
                                    to={service.path}
                                    underline="none"
                                    color="#ccc"
                                    display="block"
                                    sx={{
                                        mt: 1,
                                        "&:hover": { color: "white" }, // hover effect
                                    }}
                                >
                                    {service.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    {/* Column 4: Company Links */}
                    <Grid item xs={12} md={3}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                minHeight: "240px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    borderBottom: (theme) => `2px solid ${theme.palette.text.secondary}`,
                                    pb: 0.5,
                                    display: "inline-block",
                                }}
                            >
                                Retrofixs Solutions
                            </Typography>

                            {solutionsLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                    underline="none"
                                    color="#ccc"
                                    display="block"
                                    sx={{
                                        mt: 1,
                                        "&:hover": { color: "white" }, // hover effect
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Footer Bottom Line */}
                <Box
                    sx={{
                        textAlign: 'center',
                        mt: 6, pt: 2, color: '#fff',
                        fontSize: '1rem',
                        borderTop: `1px solid rgba(255, 255, 255, 0.56)`
                    }}>
                    {/* Unit 8, Reaymer close, Bloxwich ,Walsall, WS2 7QZ */}
                </Box>
                <Box sx={{ textAlign: 'center', pt: 2, color: '#aaa', fontSize: '0.9rem', }}>
                    © 2025 Retrofixs Solutions Ltd. All rights reserved.
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
