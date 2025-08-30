import {
    useTheme,
    Box,
    Typography,
    Stack,

} from '@mui/material';
import bgImage from '../../assets/5index.webp';

const AboutHero = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                p: { xs: 4, md: 6 },
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '110vh',
                mt: '-76px',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1,
                },
            }}
        >
            {/* Centered Content */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',
                    position: 'relative',
                    zIndex: 2, // Makes sure it's above the overlay
                }}
            >
                <Stack
                    alignItems="center"
                    spacing={3}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: '#fff',
                            fontWeight: 'bold',
                        }}
                    >
                        About us
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.text.default,
                            textAlign: 'center',
                            fontSize: { lg: '23px', md: '23px', sm: '18px' },
                            maxWidth: { lg: '600px', md: '600px', sm: '500px' },
                        }}
                    >
                        Retrofixs delivers expert services in renewable energy,
                        heating and insulation
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default AboutHero;
