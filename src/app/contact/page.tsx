
"use client"
// export default ContactPage;
import React, { useState } from 'react';
import './ContactPage.css'; // Import the CSS file for styling

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the page from reloading
        setSubmitted(true); // Set submitted state to true
    };

    return (
        <div className="contact-container">
            <header className="contact-header">
                Contact Us - Solar Tech Solutions
            </header>

            <section className="contact-form-section">
                <h2 className="contact-heading">Get in Touch</h2>
                <p className="contact-description">
                    Have questions or need assistance? Contact our team using the form below.
                </p>

                {submitted ? (
                    <div className="submission-message">
                        <p>Your message has been submitted!</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="contact-input"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="contact-input"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="contact-label">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="contact-input"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="contact-label">Subject</label>
                            <select
                                id="subject"
                                name="subject"
                                className="contact-input"
                            >
                                <option>Product Inquiry</option>
                                <option>Service Support</option>
                                <option>General Questions</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="contact-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="contact-input"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="contact-submit-btn"
                        >
                            Submit
                        </button>
                    </form>
                )}
            </section>
        </div>
    );
};

export default ContactPage;
