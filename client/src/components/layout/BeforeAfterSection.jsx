import { Box, Typography, Paper, useTheme } from '@mui/material';
import beforeImg from '../../assets/About-page/before.jpg';
import afterImg from '../../assets/About-page/after.jpg';

const BeforeAfterSection = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            maxWidth: theme.layout?.maxContentWidth || '',
            mx: 'auto',
            mb: 8,
            py: 8,
            px: { xs: 2, md: 4 },
            backgroundColor: '#f8f9fa',
            borderRadius: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, row on desktop
            gap: { xs: 3, md: 6 },
            alignItems: 'center'
        }}>
            {/* Images Container - Side by Side */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                gap: 2,
                width: '100%',
                maxWidth: { md: '600px' }
            }}>
                {/* Before Image */}
                <Box sx={{
                    flex: 1,
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    minHeight: '300px'
                }}>
                    <Box
                        component="img"
                        src={beforeImg}
                        alt="Before renovation"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    <Typography sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        fontWeight: 'bold',
                        fontSize: '1rem'
                    }}>
                        Before
                    </Typography>
                </Box>

                {/* After Image */}
                <Box sx={{
                    flex: 1,
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    minHeight: '300px'
                }}>
                    <Box
                        component="img"
                        src={afterImg}
                        alt="After renovation"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    <Typography sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        fontWeight: 'bold',
                        fontSize: '1rem'
                    }}>
                        After
                    </Typography>
                </Box>
            </Box>

            {/* Content Container */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                maxWidth: { md: '600px' }
            }}>
                <Paper elevation={0} sx={{
                    backgroundColor: '#d1fadf',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'left'
                }}>
                    <Typography variant="h6" sx={{ color: '#ff6f00', fontWeight: 700 }}>
                        8+ Years of Retrofit Excellence
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        Specialists in insulation, heating & renewable energy
                    </Typography>
                </Paper>

                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Expert Work. Real Results
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    We've helped thousands of homes across the UK reduce energy loss and
                    improve comfort. With fast, reliable service and a strong commitment to
                    sustainable living, we deliver insulation, heating, and renewable solutions
                    that make a lasting difference.
                </Typography>
            </Box>
        </Box>
    );
};

export default BeforeAfterSection;