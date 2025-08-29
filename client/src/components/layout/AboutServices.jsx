import { Box, Grid } from '@mui/material';
import solarImage from '../../assets/About-page/solar.jpg';
import loftImage from '../../assets/About-page/loft.webp';
import iwiImage from '../../assets/About-page/iwi.webp';
import ewiImage from '../../assets/About-page/ewi.webp';
import boilerImage from '../../assets/About-page/boiler.png';

const AboutServices = () => {
    const images = [ewiImage, iwiImage, loftImage, solarImage, boilerImage];

    return (
        <Box
            sx={{
                px: 4,
                py: 8,
                backgroundColor: '#f0f0f0'
            }}>
            <Grid
                container
                spacing={4}
                justifyContent="center"
            // mt={-10}
            // zIndex={10}
            >
                {images.map((imgSrc, index) => (
                    <Grid
                        item
                        key={index}
                        mt={-15}
                        zIndex={3}
                    >
                        <Box
                            sx={{
                                width: '200px',
                                height: '260px',
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: 3,
                                backgroundColor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={imgSrc}
                                alt={`Service ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // You can change this to 'contain' if needed
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AboutServices;
