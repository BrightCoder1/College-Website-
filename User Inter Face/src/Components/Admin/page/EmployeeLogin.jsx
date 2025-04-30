import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeLogin = () => {
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
                'http://localhost:3000/employee/login', 
                formData,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            
        } catch (error) {
            toast.error('Something went wrong!');
            console.error('Employee login error:', error);
        }
    };

    return (
        <div className="contact">
            <section className="contact-section">
                <div className="contact-intro">
                    <h2 className="contact-title">Employee Login</h2>
                    <p className="contact-description">
                        Please enter your credentials to login as an employee.
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
                                placeholder="Employee email"
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
                        <Link to="/admin/login">Admin Login</Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default EmployeeLogin;
