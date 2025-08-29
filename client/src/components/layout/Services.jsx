import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Stack,
    useTheme,
    Link,
    Container,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SolarIcon from '@mui/icons-material/SolarPower';
import HouseIcon from '@mui/icons-material/House';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import RoofingIcon from '@mui/icons-material/Roofing';
import InsulationIcon from '@mui/icons-material/AcUnit'; // or another insulation-like icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Dummy image imports
import img1 from '../../assets/Home-page/external-wall-insulation.jpg';
import img2 from '../../assets/Home-page/Internal-wall-insulation.jpg';
import img3 from '../../assets/Home-page/loft.jpg';
import img4 from '../../assets/Home-page/Boiler Upgrade.jpg';
import img5 from '../../assets/solar.webp';
import img6 from '../../assets/pumpp.jpg';





const OurServices = () => {
    const theme = useTheme();

    const services = [
        {
            title: 'External Wall Insulation',
            desc: 'Transform your home and reduce your energy bills with external wall insulation.',
            icon: <HouseIcon fontSize="large" />,
            image: img1,
            bg: theme.palette.background.primary,
            iconColor: theme.palette.background.primary,
            iconBg: theme.palette.background.default,
            textColor: theme.palette.text.default,

            onHoverBg: theme.palette.background.default,
            onHoverIconColor: theme.palette.background.default,
            onHoverIconBg: theme.palette.background.primary,
            onHoverTextColor: theme.palette.text.primary,

            linkColor: theme.palette.text.default,
            link: "/grants/ewi",
        },
        {
            title: 'Internal Wall Insulation',
            desc: 'Improve the heat loss of your property and delivers an instant improvement.',
            icon: <InsulationIcon fontSize="large" />,
            image: img2,
            bg: theme.palette.background.default,
            iconColor: theme.palette.background.default,
            iconBg: theme.palette.background.primary,
            textColor: theme.palette.text.primary,

            onHoverBg: theme.palette.background.primary,
            onHoverIconColor: theme.palette.background.primary,
            onHoverIconBg: theme.palette.background.default,
            onHoverTextColor: theme.palette.text.default,

            linkColor: theme.palette.background.primary,
            link: '/grants/iwi'
        },
        {
            title: 'Loft Insulation',
            desc: "Up to 25% of your home's heat is lost through the roof — reduce it with loft insulation.",
            icon: <RoofingIcon fontSize="large" />,
            image: img3,
            bg: theme.palette.background.primary,
            iconColor: theme.palette.background.primary,
            iconBg: theme.palette.background.default,
            textColor: theme.palette.text.default,

            onHoverBg: theme.palette.background.default,
            onHoverIconColor: theme.palette.background.default,
            onHoverIconBg: theme.palette.background.primary,
            onHoverTextColor: theme.palette.text.primary,

            linkColor: theme.palette.text.default,
            link: '/grants/loft'
        },
        {
            title: 'Boiler Upgrade',
            desc: 'Upgrade your boiler to improve efficiency and reduce long-term heating costs.',
            icon: <PlumbingIcon fontSize="large" />,
            image: img4,
            bg: theme.palette.background.default,
            iconColor: theme.palette.background.default,
            iconBg: theme.palette.background.primary,
            textColor: theme.palette.text.primary,

            onHoverBg: theme.palette.background.primary,
            onHoverIconColor: theme.palette.background.primary,
            onHoverIconBg: theme.palette.background.default,
            onHoverTextColor: theme.palette.text.default,

            linkColor: theme.palette.background.primary,
            link: '/grants/boiler'
        },
        {
            title: 'Solar Panels',
            desc: 'Generate your own clean energy and save money with professionally installed solar panels.',
            icon: <SolarIcon fontSize="large" />,
            image: img5,
            bg: theme.palette.background.primary,
            iconColor: theme.palette.background.primary,
            iconBg: theme.palette.background.default,
            textColor: theme.palette.text.default,

            onHoverBg: theme.palette.background.default,
            onHoverIconColor: theme.palette.background.default,
            onHoverIconBg: theme.palette.background.primary,
            onHoverTextColor: theme.palette.text.primary,

            linkColor: theme.palette.text.default,
            link: '/grants/solar'
        },
        {
            title: 'Air Source Heat Pumps',
            desc: 'Air Source Heat Pumps capture outdoor warmth to deliver efficient heating and hot water year-round.',
            icon: <SolarIcon fontSize="large" />,
            image: img6,
            bg: theme.palette.background.default,
            iconColor: theme.palette.background.default,
            iconBg: theme.palette.background.primary,
            textColor: theme.palette.text.primary,

            onHoverBg: theme.palette.background.primary,
            onHoverIconColor: theme.palette.background.primary,
            onHoverIconBg: theme.palette.background.default,
            onHoverTextColor: theme.palette.text.default,

            linkColor: theme.palette.background.primary,
            link: '/grants/ashp'
        },
    ];


    return (
        <Box
            component="section"
            sx={{
                pt: { xs: 8, md: 12 },
                // py: theme.layout?.appPaddingX,
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 4,
            }}
        >
            <Typography
                variant="h2"
                align="center"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    mb: { xs: 6, md: 8 },
                    color: 'text.primary',
                }}
            >
                Our Services
            </Typography>

            <Box
                sx={{
                    width: theme.layout?.maxContentWidth || '100%',
                    maxWidth: theme.layout?.maxContentWidth || '100%',
                    // px: 2,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 10,


                }}
            >
                {services.map((service, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        sx={{
                            width: { xs: '90%', sm: 'calc(50% - 24px)', md: 'calc(25% - 24px)' },
                            minWidth: '280px',
                            maxWidth: '300px',
                            minHeight: 420, // force all cards to be same height
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderRadius: 3,
                            boxShadow: '5px 5px 10px #888888',
                            transition: 'all 0.5s ease',


                            '&:hover': {
                                transform: 'translateY(-10px)'
                            },
                            '&:hover .cardContent': {
                                background: service.onHoverBg,
                            },
                            '&:hover .icon': {
                                background: service.onHoverIconBg,
                                color: service.onHoverIconColor
                            },
                            '&:hover .text': {
                                color: service.onHoverTextColor
                            },
                            '&:hover .link': {
                                color: service.onHoverIconBg
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={service.image}
                            alt={service.title}
                            sx={{
                                height: 180,
                                objectFit: 'cover',
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                            }}
                        />

                        <CardContent className='cardContent' sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between', // 🔥 vertically centers all inner content
                            alignItems: 'flex-start', // change to 'center' if you want everything center-aligned
                            textAlign: 'left',        // change to 'center' if needed
                            px: 2,
                            py: 3,
                            background: service.bg,

                            transition: 'all 0.5s ease',
                        }}>
                            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                                <Box
                                    className='icon'
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: service.iconColor,
                                        background: service.iconBg,
                                        borderRadius: 1,
                                        p: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                        transition: 'all 0.5s ease',

                                    }}
                                >
                                    {service.icon}
                                </Box>
                                <Typography
                                    className='text'
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 700, color: service.textColor,

                                        transition: 'all 0.5s ease',
                                    }}
                                >
                                    {service.title}
                                </Typography>
                            </Stack>

                            <Typography
                                className='text'
                                variant="body2"
                                sx={{
                                    color: service.textColor,
                                    mb: 'auto',

                                    transition: 'all 0.5s ease',
                                }}>
                                {service.desc}
                            </Typography>

                            <Box mt={2}>
                                <Link
                                    className='link'
                                    component={RouterLink}
                                    to={service.link}
                                    underline="none"
                                    sx={{
                                        color: service.linkColor,
                                        fontWeight: 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        transition: 'all 0.5s ease',

                                        '&:hover': {
                                            transform: 'translateX(5px) !important',
                                            color: `${theme.palette.text.secondary} !important`,
                                        }
                                    }}
                                >
                                    Read More <ArrowForwardIcon fontSize="small" />
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>

                ))}
            </Box>
        </Box>
    );
};

export default OurServices;