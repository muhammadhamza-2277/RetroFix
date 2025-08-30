import { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

// Import your images
import img1 from '../../assets/Home-page/ModernHome.jpg';
import img2 from '../../assets/Home-page/Boiler upgrade.jpg';
import img3 from '../../assets/Home-page/Solar panel.jpg';

const slides = [
    {
        image: img1,
        headingParts: {
            before: 'Government Backed',
            highlight: 'Grants Scheme',
            after: 'For UK Households'
        },
        paragraph: 'Cut your energy costs with sustainable solutions, and get your concerns addressed effortlessly, all backed by certified protection!.',

        button1: 'Learn More'
    },
    {
        image: img2,
        headingParts: {
            before: 'Boiler',
            highlight: 'Upgrade',
            after: 'Program'
        },
        paragraph: 'Take advantage of our boiler upgrade program to improve your home heating efficiency.',
        button1: 'View Program',
    },
    {
        image: img3,
        headingParts: {
            before: 'Solar Panel',
            highlight: 'Installation',
            after: 'Services'
        },
        paragraph: 'Harness the power of the sun with our professional solar panel installation services.',
        button1: 'Explore Options',
    }
];

const SlideContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8),
    },
}));

const DotsContainer = styled(Box)({
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 8,
});

const Dot = styled(Box)(({ active, theme }) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: active ? theme.palette.button.secondary : theme.palette.text.default,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
}));

const ButtonsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',

    },
}));

const HeroSlider = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setActiveSlide(index);
    };

    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            maxWidth: isLargeScreen ? '1440px' : '100%',
            height: 'calc(100vh)', // Subtract navbar height
            mt: '-75px',
            mx: 'auto',
            padding: 0,
            overflow: 'hidden',
        }}>
            {slides.map((slide, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: `${(index - activeSlide) * 100}%`,
                        width: '100%',
                        height: '100%',
                        transition: 'left 0.5s ease',
                        backgroundImage: `linear-gradient(rgba(169, 169, 169, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <SlideContainer
                        sx={{
                            maxWidth: "700px",
                            mx: 'auto'
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.text.default,
                            }}>
                            {slide.headingParts.before}{' '}
                            <Typography
                                component="span"
                                variant="inherit"
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                {slide.headingParts.highlight}
                            </Typography>{' '}
                            {slide.headingParts.after}
                        </Typography>

                        <Typography variant="h6" sx={{ maxWidth: 600, mb: 4 }}>
                            {slide.paragraph}
                        </Typography>

                        <ButtonsContainer>
                            <Button
                                variant="filled"
                                color="primary"
                                sx={{
                                    // alignItems: 'center',
                                }}
                            >
                                {slide.button1}
                            </Button>
                        </ButtonsContainer>
                    </SlideContainer>
                </Box>
            ))}

            <DotsContainer>
                {slides.map((_, index) => (
                    <Dot
                        key={index}
                        active={index === activeSlide}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </DotsContainer>
        </Box>
    );
};

export default HeroSlider;