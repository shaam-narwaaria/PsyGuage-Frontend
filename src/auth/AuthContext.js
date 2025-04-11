// src/auth/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Backend base URL
const BASE_URL = "https://psyguage-backend.onrender.com";

// Create context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => useContext(AuthContext);

// Provider
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // ✅ new state
    const [user, setUser] = useState(null);

    // ✅ Check for token on app load
    useEffect(() => {
        const token = localStorage.getItem("token");
        const userInfo = JSON.parse(localStorage.getItem("user"));

        if (token && userInfo) {
            setIsAuthenticated(true);
            setUser(userInfo);
        }

        setLoading(false); // ✅ only render app after auth check
    }, []);


    // ✅ Login handler
    const login = async (email, password) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/auth/login`, { email, password });
            const { user } = res.data;

            // Save to localStorage
            localStorage.setItem("token", res.data.token); // assuming backend sends it
            localStorage.setItem("user", JSON.stringify(user));

            setUser(user);
            setIsAuthenticated(true);
            return { success: true };
        } catch (err) {
            console.error("❌ Login failed:", err);
            return { success: false, message: err.response?.data?.message || "Login error" };
        }
    };

    // ✅ Logout handler
    const logout = async () => {
        try {
            await axios.post(`${BASE_URL}/api/auth/logout`);
        } catch (err) {
            console.error("❌ Logout failed:", err);
        }

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
