import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError(false);
        setLoading(true);

        try {
            const res = await axios.post(
                "https://psyguage-backend.onrender.com/api/auth/register",
                form,
                { withCredentials: true }
            );

            localStorage.setItem("game_username", JSON.stringify(form.name));
            localStorage.setItem("game_useremail", JSON.stringify(form.email));

            setMessage(res.data.message);
            setLoading(false);
            navigate("/");
        } catch (err) {
            setMessage(err.response?.data?.message || "Registration failed");
            setError(true);
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "420px" }}>
                <div className="card shadow-sm border-0 rounded-4 p-4">
                    <h2 className="text-center mb-4 fw-bold">Create Account</h2>

                    {message && (
                        <div className={`alert ${error ? "alert-danger" : "alert-success"} text-center`} role="alert">
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control rounded-pill"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

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

                        <div className="mb-4">
                            <label className="form-label fw-semibold">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control rounded-pill"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-2" disabled={loading}>
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>

                    <div className="text-center mt-3 small text-muted">
                        Already have an account? <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
