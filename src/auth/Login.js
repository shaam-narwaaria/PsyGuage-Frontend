import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const { setIsAuthenticated } = useAuth();
    const [form, setForm] = useState({ email: "", password: "", rememberMe: false });
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError(false);
        setLoading(true);

        try {
            const res = await axios.post(
                "https://psyguage-backend.onrender.com/api/auth/login",
                form,
                { withCredentials: true }
            );

            const { name, email } = res.data.user || {};
            localStorage.setItem("game_username", JSON.stringify(name));
            localStorage.setItem("game_useremail", JSON.stringify(email));

            setIsAuthenticated(true);
            setMessage(res.data.message);
            setLoading(false);
            navigate("/");
        } catch (err) {
            setMessage(err.response?.data?.message || "Login failed");
            setError(true);
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "420px" }}>
                <div className="card shadow-sm border-0 rounded-4 p-4">
                    <h2 className="text-center mb-4 fw-bold">Login</h2>

                    {message && (
                        <div className={`alert ${error ? "alert-danger" : "alert-success"} text-center`} role="alert">
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control rounded-pill"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="form-control rounded-start-pill"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary rounded-end-pill"
                                    onClick={togglePasswordVisibility}
                                    tabIndex={-1}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="rememberMe"
                                id="rememberMe"
                                checked={form.rememberMe}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-2" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="text-center mt-3 small text-muted">
                        Don’t have an account? <a href="/register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
