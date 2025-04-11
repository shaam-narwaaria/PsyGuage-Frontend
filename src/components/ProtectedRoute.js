import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // Wait until AuthContext finishes checking

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
