import {
    Box,
    Typography,
    Grid,
    Stack,
    Button,
    useTheme,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import bgImage from '../../assets/Home-page/Full-Home-Insulation.jpg';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocalPoliceTwoToneIcon from '@mui/icons-material/LocalPoliceTwoTone';

const stats = [
    {
        icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
        value: '3785+',
        label: 'Successful Projects',
    },
    {
        icon: <PersonIcon sx={{ fontSize: 40 }} />,
        value: '9800+',
        label: 'Satisfied Clients',
    },
    {
        icon: <MailOutlineIcon sx={{ fontSize: 40 }} />,
        value: '1052+',
        label: 'Expert Consultants',
    },
    {
        icon: <LocalPoliceTwoToneIcon sx={{ fontSize: 40 }} />,
        value: '7+',
        label: 'Years Of Experience',
    },
];

const CompanyInNumbers = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                mt: { xs: 8, md: 12 },
                py: { xs: 8, md: 10 },
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 1,
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    mx: 'auto',
                    px: 2,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 6,
                    width: theme.layout?.maxContentWidth || '100%',
                    maxWidth: theme.layout?.maxContentWidth || '100%',
                }}
            >
                {/* LEFT COLUMN */}
                <Box sx={{ flex: 1, color: 'white', minWidth: { lg: '500px', md: '300px' } }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                        Have <Box component="span" sx={{ color: theme.palette.text.secondary, }}>8 Years</Box> of Excellence
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.300', mb: 3 }}>
                        A wonderful sense of purpose drives us—shaping homes, fulfilling dreams, and building a legacy of trust, year after year.
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1, color: theme.palette.text.default }}>
                        Call us Monday to Saturday from <Box component="span" sx={{ color: '#ff6600', fontSize: '18px', }}>9AM to 6PM</Box>
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                        <PhoneInTalkIcon
                            sx={{
                                color: theme.palette.background.default,
                                borderRadius: 9999,
                                fontSize: 30,
                                p: 1,
                                boxSizing: 'content-box',
                                // backgroundColor: theme.palette.background.primary,
                                backgroundColor: '#0f9d58',
                                // backgroundColor: '#007f1c',

                            }} />
                        <Typography variant="h5" sx={{ color: '#007f1c', fontWeight: '620', }}>
                            0800 058 4530
                        </Typography>
                    </Stack>
                    <Button
                        variant="filled"
                    >
                        Contact Us
                    </Button>


                </Box>

                {/* RIGHT COLUMN */}
                <Grid container spacing={3} >
                    {stats.map((stat, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={index} sx={{ minWidth: '200px', }}>
                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    boxSizing: 'border-box',
                                    p: 3,
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    boxShadow: 3,
                                }}
                            >
                                <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                                <Typography variant="h5" sx={{ color: 'green', fontWeight: 'bold' }}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black' }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default CompanyInNumbers;
