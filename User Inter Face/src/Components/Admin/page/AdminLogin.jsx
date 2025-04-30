import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
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
                'http://localhost:3000/admin/login',
                formData,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );

            toast.success("User Login Successfully!...")
            navigate("/admin");
        } catch (error) {
            toast.error('Something went wrong!');
            console.error('Admin login error:', error);
        }
    };
    
    return (
        <div className="contact">
            <section className="contact-section">
                <div className="contact-intro">
                    <h2 className="contact-title">Admin Login</h2>
                    <p className="contact-description">
                        Please enter your credentials to login as admin.
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
                                placeholder="Admin email"
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
                                placeholder="Password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button className="form-submit" type="submit">Login</button>
                    <div className="loginAdmn">
                        <Link to="/login">User Login</Link>
                        <Link to="/employee/login">Employee Login</Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AdminLogin;
