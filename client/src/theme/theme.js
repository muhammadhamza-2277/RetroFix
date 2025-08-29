import { createTheme } from '@mui/material/styles';

export const getTheme = (mode = 'light') =>
    createTheme({
        palette: {
            mode: 'light',
            text: {
                primary: '#000000', // Accent color for buttons etc.
                secondary: '#fd5726',
                dim: '#cacacaff',
                default: '#fff'
            },
            background: {
                primary: '#018e6e', // Orange for headings
                secondary: '#fd5726',
                default: '#fff',
                footer: '#2b3238'

            },
            button: {
                primary: '#018e6e',
                secondary: '#fd5726',
            }
        },
        breakpoints: {
            values: {
                xxs: 0,
                xs: 360,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
                xxl: 1800,
            },
        },

        typography: {
            fontFamily: `'Poppins', sans-serif`,

            h1: {
                fontFamily: `'Funnel Display', sans-serif`,
                fontWeight: 700,
                fontSize: '3rem',
                color: 'text.default',  // Heading color
            },
            h2: {
                fontFamily: `'Funnel Display', sans-serif`,
                fontWeight: 600,
                fontSize: '2.25rem',
                color: '#cf613c',
            },
            h3: {
                fontFamily: `'Funnel Display', sans-serif`,
                fontWeight: 600,
                fontSize: '1.75rem',
                color: '#cf613c',
            },

            body1: {
                fontSize: '1rem',
                color: '#333333',  // Paragraphs
                lineHeight: 1.6,
            },
            body2: {
                fontSize: '0.9rem',
                color: '#444444',  // Secondary paragraph
            },
            subtitle1: {
                fontSize: '1rem',
                color: '#666666',
            },
        },


        layout: {
            maxContentWidth: {
                xxs: 'calc(100%-16px)',
                xs: 'calc(100% - 32px)',        // ~16px padding each side
                sm: 'calc(100% - 64px)',        // ~32px padding
                md: 'calc(100% - 96px)',        // ~48px padding
                lg: 'calc(100% - 128px)',                   // fixed width when screen wide enough
                xl: '1140px',
                xxl: '1320px',
            },
            maxContentPx: {
                xs: '98%%',
                sm: '760px',
                md: '1040px',
                lg: '1440px',
            },
            topOffset: '10px',
            appPaddingX: {
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
            }
        },

        // 🟢 Add this custom shape config
        shape: {
            sectionSpacingY: 10,        // theme.spacing(10) = 80px vertical breathing
            sectionPaddingX: { xs: 2, md: 6 }, // 16px / 48px horizontal breathing
        },

        components: {
            MuiButton: {
                variants: [
                    // 🔹 1. Text Button with Underline Hover
                    {
                        props: { variant: 'simple' },
                        style: ({ theme }) => ({
                            backgroundColor: 'transparent',
                            color: theme.palette.text.primary,
                            textTransform: 'none',
                            padding: '8px 15px',
                            fontWeight: 500,
                            fontSize: '1rem',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: '45%',
                                bottom: 0,
                                width: '0%',
                                height: '10px',
                                // backgroundColor: theme.palette.button.secondary,
                                backgroundColor: '#fd5726',
                                transition: 'width 0.5s ease',
                                borderRadius: 9999
                            },
                            '&:hover::after': {
                                width: '10px',
                            },
                        }),
                    },


                    // 🔸 2. Filled Button with Custom Hover
                    {
                        props: { variant: 'filled' },
                        style: ({ theme }) => ({
                            backgroundColor: "#018e6e",
                            color: '#fff',
                            textTransform: 'none',
                            // padding: theme.spacing(1, 3),
                            padding: '8px 15px 8px 15px',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            fontSize: '1rem',
                            transition: 'all 0.5s ease',
                            '&:hover': {
                                backgroundColor: '#fd5726',
                                boxShadow: `0px 4px 12px rgba(5, 3, 3, 0.15)`,
                            },
                        }),
                    },
                ],
            },
        },


    });
