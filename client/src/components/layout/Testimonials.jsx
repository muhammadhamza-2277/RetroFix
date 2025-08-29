import React from 'react';
import { Box, Typography, Avatar, Card, CardContent, Stack, useTheme } from '@mui/material';
import Slider from 'react-slick';

// Dummy data
const testimonials = [
    {
        name: 'Jenny Wilson',
        role: 'Google Reviewer',
        image: '/ICONS/ok.png', // Placeholders
        title: 'Professional and Friendly!',
        description: `Boys did our loft insulation. I'm very happy with the service. Staff was professional, considerate and approachable. I liked their attention to details approach. Process was explained before they arrived on site. I'll highly recommend this company.`,
    },
    {
        name: 'Bessie Cooper',
        role: 'Google Reviewer',
        image: '/ICONS/ok.png',
        title: 'Excellent Hospitality!',
        description: `Retrofix Solutions delivered outstanding service for our insulation project. Their team provided excellent, consistent communication every step of the way. The staff were friendly, and the project was completed efficiently and on schedule. Highly recommended for their professionalism and attention to detail.`,
    },
    {
        name: 'Albert Flores',
        role: 'Google Reviewer',
        image: '/ICONS/ok.png',
        title: 'Outstanding Work!',
        description: `Very impressed by the team's efficiency and politeness. Everything was well communicated and executed with care. The insulation was neat and effective. Definitely a 5-star experience!`,
    },
];

const Testimonials = () => {
    const theme = useTheme();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,               // enable auto sliding
        autoplaySpeed: 3000,          // 3 seconds per slide
        pauseOnHover: true,           // optional: pause on mouse hover
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                py: 10,
                backgroundColor: 'background.default',
            }}>
            <Typography
                variant="overline"
                textAlign="center"
                display="block"
                color={theme.palette.text.secondary}
                gutterBottom
            >
                Customer Reviews
            </Typography>
            <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                mb={6}
                color={theme.palette.text.primary}
            >
                What Our Satisfied Customer Are Saying
            </Typography>

            <Box sx={{ width: theme.layout?.maxContentWidth, mx: 'auto' }}>
                <Slider {...sliderSettings}>
                    {testimonials.map((item, index) => (
                        <Box key={index} px={2}>
                            <Card
                                elevation={3}
                                sx={{
                                    borderRadius: 4,
                                    height: '100%', // fills the height of slick slide container
                                    minHeight: 300, // ensures uniform height across cards
                                    display: 'flex',
                                    alignItems: 'center',
                                    my: 3,
                                    pl: 3,
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.primary"
                                        mb={3}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Avatar src={item.image} alt={item.name} />
                                        <Box>
                                            <Typography fontWeight="bold">{item.name}</Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {item.role}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box >
    );
};

export default Testimonials;
