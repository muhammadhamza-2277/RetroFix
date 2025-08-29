import {
    Box,
    Typography,
    useTheme
} from '@mui/material';

function CareerFormLeftSection() {

    const theme = useTheme();

    return (
        <>
            {/* LEFT SECTION */}
            <Box
                sx={{
                    flex: 0.9,
                    padding: '40px',
                    background: 'linear-gradient(to left, #86cfa1, #a7ba9a)',
                    borderRadius: '10px 0 0 10px',
                    color: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'space-between',
                    gap: 5,
                }}
            >
                {/* Title */}
                <Typography variant="h4" sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>
                    Start Your Journey to Success with Our Internship{' '}
                    <Box component="span" sx={{ color: '#ff6600' }}>Opportunities</Box>
                </Typography>

                {/* Tagline box */}
                <Box
                    sx={{
                        backgroundColor: '#d4f4e4',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        maxWidth: '350px',
                        alignSelf: 'center'
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#333' }}>
                        Gain hands-on experience, grow with expert guidance and build a future you’re proud of.
                    </Typography>
                </Box>

                {/* Application Instructions Card */}
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            color: '#006d5b',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2
                        }}
                    >
                        📄 Application Instructions
                    </Typography>

                    {[
                        'Please complete this form to apply for a position at Retrofix Solutions Ltd. It only takes a few minutes.',
                        'Ensure you upload your CV and a clear image of your Passport Photo ID page using the upload buttons.',
                        'Applications submitted outside this form will not be considered.',
                        'Only shortlisted candidates will be contacted for the next stage of the selection process.'
                    ].map((text, idx) => (
                        <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 1,
                                mb: 1.5
                            }}
                        >
                            <Box component="span" sx={{ color: '#00b894', fontWeight: 'bold' }}>✔</Box>
                            <span dangerouslySetInnerHTML={{ __html: text }} />
                        </Typography>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default CareerFormLeftSection