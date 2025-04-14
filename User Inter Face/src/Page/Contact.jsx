import React, { useState } from 'react';
import "./ContactFrom.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const ContactForm = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await axios.post(
                "http://localhost:3000/contact",
                formData,
                {
                    headers: { "Content-Type": "application/json" }
                }
            );

            toast.success("Message Send Successfully!...");

        } catch (error) {
            console.log(error);
            toast.error("Something want wrong!..");
        }
    };

    return (
        <div className="contact">
            <ToastContainer className="z-index" />
            <section className="contact-section">
                <div className="contact-intro">
                    <h2 className="contact-title">Contact Form</h2>
                    <p className="contact-description">
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <form method='post' className="contact-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                    <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
                    <input type="hidden" name="from_name" value="My Website" />

                    <div className="form-group-container">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Your name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
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
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                className="form-input"
                                placeholder="+1 (234) 56789"
                                type="text"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-textarea"
                                id="message"
                                name="message"
                                placeholder="Your message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <button className="form-submit" type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default ContactForm;