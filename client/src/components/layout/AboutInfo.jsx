import { Box, Typography, Stack, Button, useTheme } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 4, md: 8 },
                background: `linear-gradient(to bottom, ${theme.palette.background.primary}, ${theme.palette.background.default})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 4,
                    maxWidth: '900px',
                }}
            >
                Established in 2017, Retrofix Solutions is a trusted expert in renewable energy, heating, and insulation
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'start',
                    gap: 4,
                    mb: 4,
                    maxWidth: '1200px',
                    width: '100%',
                }}
            >
                <Typography
                    variant="body1"
                    textAlign={'justify'}
                    sx={{
                        flex: 1,
                        color: 'text.primary',
                        lineHeight: 1.6,
                    }}
                >
                    We have a dedicated team of professional installers delivering a wide range of energy efficiency solutions across the UK. With a commitment to quality and lasting results, our approach begins with enhancing your home's fabric, then upgrading to efficient heating systems and renewable technologies — creating a complete, whole-house solution.
                </Typography>

                <Typography
                    variant="body1"

                    textAlign={'justify'}
                    sx={{
                        flex: 1,
                        color: 'text.primary',
                        lineHeight: 1.6,
                    }}
                >
                    At Retrofix Solutions, we're not just improving homes — we're helping build a more sustainable future for families across the UK. As a trusted provider under the Energy Company Obligation (ECO) scheme, we're raising energy ratings, cutting carbon emissions, and helping households lower energy bills while tackling fuel poverty.
                </Typography>
            </Box>


        </Box>
    );
};

export default AboutSection;
