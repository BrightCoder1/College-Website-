import React, { useState } from 'react';
import "./ContactFrom.css";


const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact">
            <section className="contact-section">
                <div className="contact-intro">
                    <h2 className="contact-title">Login Form</h2>
                    <p className="contact-description">
                        Please Fill full the Form for Login User....
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                    <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
                    <input type="hidden" name="from_name" value="My Website" />

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
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="passwrod" className="form-label">Password</label>
                            <input
                                id="email"
                                name="password"
                                className="form-input"
                                placeholder="Your Password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="form-submit" type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Login;