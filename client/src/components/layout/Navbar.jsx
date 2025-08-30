import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Button,
    useTheme,
    useMediaQuery,
    Menu,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SidebarDrawer from './SidebarDrawer';
import GrantsDropdown from "./GrantsDropdown";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // State for Grants dropdown
    const [anchorEl, setAnchorEl] = useState(null);
    const openGrantsMenu = Boolean(anchorEl);

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    useEffect(() => {
        const handleScroll = () => {
            const offset = 50;
            setIsScrolled(window.scrollY > offset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dropdown handlers
    const handleGrantsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleGrantsClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar
                position='sticky'
                elevation={0}
                sx={{
                    top: '10px',
                    transition: 'all 0.3s ease',
                    bgcolor: isScrolled ? 'rgba(252, 251, 245, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                    width: theme.layout?.maxContentWidth || '',
                    maxWidth: theme.layout?.maxContentWidth || '',
                    mx: 'auto',
                    mt: isScrolled ? theme.layout?.topOffset || '10px' : '10px',
                    borderRadius: 9999,
                    backdropFilter: isScrolled ? 'blur(5px)' : 'blur(10px)',
                    WebkitBackdropFilter: isScrolled ? 'blur(5px)' : 'blur(10px)',
                    boxShadow: isScrolled
                        ? '0px 4px 10px rgba(0, 0, 0, 0.06)'
                        : 'none',
                    border: 'none',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <IconButton
                        component={Link} to="/home"
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                transform: 'none',
                            },
                        }}
                    >
                        <img src="/apple-icon-180x180.png" alt="RetroFix icon" width={50} />
                        <Typography variant="h6" sx={{ fontWeight: 600, pl: 2 }}>
                            Retrofixs Solutions
                        </Typography>
                    </IconButton>

                    {/* Desktop Menu */}
                    {isMobile ? (
                        <IconButton edge="end" onClick={toggleDrawer(true)} >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Button component={Link} to="/home" variant="simple" color="inherit">Home</Button>
                            <Button component={Link} to="/about" variant="simple" color="inherit">About</Button>
                            <GrantsDropdown /> {/* Now separate */}
                            <Button component={Link} to="/career" variant="simple" color="inherit">Career</Button>
                            <Button component={Link} to="/contact" variant="filled" color="inherit">Contact</Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Sidebar for Mobile */}
            <SidebarDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
};

export default Navbar;
