import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://retrofix.onrender.com/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                const { token } = await res.json();
                sessionStorage.setItem("token", token);
                navigate("/admin");
            } else {
                alert("Invalid credentials");
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Server error");
        }
    };

    return (
        <>
            <Navbar />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="80vh"
                bgcolor={theme.palette.background.default}
            >
                <Card
                    sx={{
                        maxWidth: 400,
                        width: "100%",
                        boxShadow: 3,
                        borderRadius: 3,
                        p: 2,
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            sx={{ color: theme.palette.background.primary, fontWeight: "bold" }}
                        >
                            Admin Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    py: 1.2,
                                    backgroundColor: theme.palette.button.primary,
                                    "&:hover": {
                                        backgroundColor: theme.palette.button.secondary,
                                    },
                                    fontWeight: "bold",
                                }}
                            >
                                Login
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
