import React, { useState } from 'react';
import './ContactFrom.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import "./login.css";
const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3000/login',
                formData,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            // console.log(response.data);
            // navigate("/student");
            toast.success("User Login Successfully!..");
        } catch (error) {
            toast.error('Something went wrong!');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="contact">
            <ToastContainer className="z-index" />
            <section className="contact-section">
                <div className="contact-intro">
                    <h2 className="contact-title">Login Form</h2>
                    <p className="contact-description">
                        Please fill out the form to login.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group-container">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="Your email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="Your Password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button className="form-submit" type="submit">Login</button>
                    <div className="loginAdmn">
                        <Link to="/admin/login">Admin Login</Link>
                        <Link to="/employee/login">Employee Login</Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;
