import { Box, Typography, Stack, useTheme } from '@mui/material';

const reasons = [
    {
        number: 1,
        title: 'Certified & Experienced Installers',
        desc: 'Our team consists of qualified professionals with extensive experience in boiler, loft, and solar panel installations.',
        color: 'primary.dark', // adjust as per your palette
    },
    {
        number: 2,
        title: 'Customer-First Approach',
        desc: 'Courtesy and professionalism are core values—your satisfaction is our priority from first contact to final installation.',
        color: 'grey.600',
    },
    {
        number: 3,
        title: 'High-Quality Workmanship',
        desc: 'We use the best tools and materials to ensure long-lasting, efficient solutions tailored to your home.',
        color: 'warning.main',
    },
    {
        number: 4,
        title: 'Eco-Friendly Focus',
        desc: 'Our installations help you reduce energy bills while lowering your carbon footprint and supporting a greener future.',
        color: 'success.main',
    },
];

const WhyChooseUsSection = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                pt: { xs: 8, md: 12 },
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'background.default',

                mx: 'auto',
            }}
        >
            <Box
                sx={{
                    width: theme.layout?.maxContentWidth || '100%',
                    maxWidth: theme.layout?.maxContentWidth || '100%',
                    // px: 2,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 2,
                    backgroundColor: 'background.default',
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        flex: 1,
                        // backgroundColor: 'background.primary',
                        backgroundColor: '#253734',
                        color: '#fff',
                        px: { xs: 4, md: 6 },
                        py: { xs: 6, md: 8 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderRadius: { xs: '0', md: '0 0 0 1rem' },
                    }}
                >
                    <Typography variant="h6"
                        sx={{
                            mb: 1,
                            // color: 'text.dim',
                            color: 'white',
                        }}>
                        Why Choose Us?
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            lineHeight: 1.3,
                        }}
                    >
                        Trusted{' '}
                        <Box
                            component="span"
                            sx={{
                                // color: 'text.secondary',
                                color: '#ff6600',
                            }}
                        >
                            Installers
                        </Box>{' '}
                        Professionals
                    </Typography>
                </Box>

                {/* Right Side */}
                <Box
                    sx={{
                        flex: 2,
                        pl: { xs: 4, md: 0 },
                        pr: { xs: 4, md: 6 },
                        py: { xs: 4, md: 6 },
                        ml: { xl: -3, lg: -3, md: -3 }
                    }}
                >
                    <Stack spacing={4}>
                        {reasons.map((item) => (
                            <Stack
                                direction="row"
                                spacing={2}
                                key={item.number}
                                sx={{

                                }}
                            >
                                <Box
                                    sx={{
                                        minWidth: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette[item.color.split('.')[0]][item.color.split('.')[1]],
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid #ffffff',
                                        fontWeight: 600,
                                        fontSize: 16,
                                        boxShadow: 1,
                                        mt: '4px',
                                    }}
                                >
                                    {item.number}
                                </Box>
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2"
                                        sx={{
                                            color: 'text.primary'
                                        }}>
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Stack>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default WhyChooseUsSection;
