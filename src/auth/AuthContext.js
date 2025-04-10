// src/auth/AuthContext.js
import React, { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);

// AuthProvider wraps your app
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
