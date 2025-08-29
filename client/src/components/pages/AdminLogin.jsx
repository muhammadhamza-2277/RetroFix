import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                const { token } = await res.json();
                // Replace localStorage with sessionStorage
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
            <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "50px auto" }}>
                <h2>Admin Login</h2>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    );
}
