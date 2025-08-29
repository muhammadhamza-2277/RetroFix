import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, useTheme, Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import image from '../../assets/About-page/EnergyEfficiencySection.jpg'; // Replace with your image path

const servicesLeft = [
    { label: 'External Wall Insulation', link: '/grants/ewi' },
    { label: 'Internal Wall Insulation', link: '/grants/iwi' },
    { label: 'Solar Panels installation', link: '/grants/solar' },
    { label: 'Loft Insulation', link: '/grants/loft' },

];

const servicesRight = [
    { label: 'air source heat pump installation', link: "/grants/ashp" },
    { label: 'First Time  Gas Central Heating', link: '/grants/ftch' },

    { label: 'Boiler Upgrade', link: '/grants/boiler' },
];

const EnergyEfficiencySection = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            py: 6,
            // px: { xs: 2, md: 6 },
            backgroundColor: 'background.default',
            width: '100%',
            maxWidth: theme.layout?.maxContentWidth || '',
            mx: 'auto'
        }}>
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="space-between"
            >
                {/* Image First on Mobile, Last on Desktop */}
                <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
                    <Box
                        component="img"
                        src={image}
                        alt="Energy Efficiency"
                        sx={{
                            width: '100%',
                            borderRadius: 3,
                            boxShadow: 3,
                        }}
                    />
                </Grid>

                {/* Text Content Second on Mobile, First on Desktop */}
                <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
                    <Typography variant="h4" fontWeight="bold" maxWidth="650px" gutterBottom>
                        Trusted Experts in Home Insulation & Energy Efficiency
                    </Typography>
                    <Typography variant="body1" mb={3} maxWidth="550px">
                        At Retrofix Solutions, we deliver reliable, government-backed solutions that improve comfort,
                        cut energy costs, and reduce carbon emissions. From insulation to heating and renewable systems,
                        our certified team helps homeowners across the UK create warmer, more efficient living spaces.
                    </Typography>

                    <Typography variant="h6" color="success.main" fontWeight="bold" mb={1}>
                        Our services include:
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <List dense>
                                {servicesLeft.map((service, i) => (
                                    <ListItem key={i} disableGutters>
                                        <ListItemIcon>
                                            <CheckCircleIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Link
                                                    href={service.link}
                                                    underline="hover"
                                                    color="inherit"
                                                    sx={{
                                                        transition: 'color 0.3s',
                                                        '&:hover': { color: '#ff6600' }
                                                    }}
                                                >
                                                    {service.label}
                                                </Link>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List dense>
                                {servicesRight.map((service, i) => (
                                    <ListItem key={i} disableGutters>
                                        <ListItemIcon>
                                            <CheckCircleIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Link
                                                    href={service.link}
                                                    underline="hover"
                                                    color="inherit"
                                                    sx={{
                                                        transition: 'color 0.3s',
                                                        '&:hover': { color: '#ff6600' }
                                                    }}
                                                >
                                                    {service.label}
                                                </Link>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    );
};

export default EnergyEfficiencySection;
