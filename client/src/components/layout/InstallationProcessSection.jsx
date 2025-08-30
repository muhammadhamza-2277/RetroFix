import {
    Box,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
    useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react'; // Add this import

const steps = [
    {
        title: 'Check your eligibility',
        content: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
    },
    {
        title: 'We’ll call you back to discuss your details',
        content: `Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
        
        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.`,
    },
    {
        title: 'Book your home survey',
        content: 'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.',
    },
    {
        title: 'Book Installation',
        content: 'Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with web-enabled technology.',
    },
    {
        title: 'Sit back and enjoy',
        content: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
    },
];

const InstallationProcessSection = () => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(null); // State to track expanded panel

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Box
            component="section"
            sx={{
                pt: { xs: 8, md: 12 },
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: theme.layout?.maxContentWidth || '100%',
                    maxWidth: theme.layout?.maxContentWidth || '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 6,
                }}
            >
                {/* Left Card */}
                <Box
                    sx={{
                        flex: 1,
                        background: 'linear-gradient(to right, #f0f4f8, #b7eeb0)',
                        // background: `linear-gradient(to bottom left, ${theme.palette.background.primary}, ${theme.palette.background.default})`,
                        borderRadius: 4,
                        p: { xs: 4, md: 6 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: { xs: 'center', md: 'left' },
                        width: '100%'
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                        }}
                    >
                        Are you interested in a house survey?
                    </Typography>
                    <Button
                        variant="filled"
                        textAlign='center'
                        component={Link}
                        to="/check-eligibility"
                        sx={{
                            mt: 4,
                            alignSelf: { xs: 'center', md: 'flex-start' },
                            width: 'fit-content',
                        }}
                        endIcon={
                            <ArrowCircleRightIcon
                                sx={{ fontSize: '1.5rem !important' }}
                            />
                        }
                    >
                        Check Eligibility
                    </Button>

                </Box>

                {/* Right Accordion */}
                <Box flex={1}>
                    <Typography
                        variant="h6"
                        sx={{ color: 'text.secondary', mb: 1 }}
                    >
                        Are you ready?
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}
                    >
                        Our Installation Process
                    </Typography>

                    <Stack spacing={2}>
                        {steps.map((step, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === index}
                                onChange={handleChange(index)}
                                elevation={2}
                                sx={{
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    backgroundColor: 'background.paper',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        '& .MuiAccordionSummary-content': {
                                            alignItems: 'center',
                                            gap: 2,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: 'background.primary',
                                            color: '#fff',
                                            width: 40,
                                            minWidth: 40,
                                            height: 40,
                                            minHeight: 40,
                                            borderRadius: '50%',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {index + 1}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            color: 'text.primary'
                                        }}>
                                        {step.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.sprimary',
                                            mb: index === 0 ? 2 : 0,
                                            whiteSpace: 'pre-line'
                                        }}>
                                        {step.content}
                                    </Typography>

                                    {index === 0 && (
                                        <Button
                                            variant="filled"
                                            textAlign='center'
                                            component={Link}
                                            to="/check-eligibility"
                                            sx={{
                                                mt: 4,
                                                alignSelf: { xs: 'center', md: 'flex-start' },
                                                width: 'fit-content',
                                            }}
                                            endIcon={
                                                <ArrowCircleRightIcon
                                                    sx={{ fontSize: '1.5rem !important' }}
                                                />
                                            }
                                        >
                                            Check Eligibility
                                        </Button>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default InstallationProcessSection;