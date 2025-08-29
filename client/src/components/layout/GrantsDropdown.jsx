import React, { useState, useRef, useEffect } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const GrantsDropdown = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Box sx={{ position: "relative" }} ref={dropdownRef}>
            <Button
                variant="simple"
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={() => setOpen((prev) => !prev)}
            >
                Grants
            </Button>

            {open && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        mt: 1,
                        color: "text.primary",
                        bgcolor: "rgba(255, 255, 255, 1)", // same as navbar when scrolled
                        borderRadius: 3, // slightly larger for smooth edges
                        // backdropFilter: "blur(10px)", // same blur effect
                        // WebkitBackdropFilter: "blur(10px)", // safari
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.09)",
                        minWidth: 320,
                        zIndex: 10,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'center',
                        // alignItems: 'center',
                        p: 1,
                        border: "none",
                    }}
                >
                    {[
                        { label: "External Wall Insulation", path: "/grants/ewi" },
                        { label: "Internal Wall Insulation", path: "/grants/iwi" },
                        { label: "Loft Insulation", path: "/grants/loft" },
                        { label: "Boiler Upgrade", path: "/grants/boiler" },
                        { label: "First Time Gas Central Heating", path: "/grants/ftch" },
                        { label: "Air Source Heat Pumps", path: "/grants/ashp" },
                        { label: "Solar Panels", path: "/grants/solar" },
                    ].map((item) => (
                        <Button
                            key={item.path}
                            component={Link}
                            to={item.path}
                            sx={{
                                justifyContent: "flex-start",
                                color: "inherit",
                                textTransform: "none",
                                fontSize: "0.95rem",
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                "&:hover": { backgroundColor: "rgba(172, 172, 172, 0.5)" },
                            }}
                            onClick={() => setOpen(false)} // close on click
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default GrantsDropdown;
