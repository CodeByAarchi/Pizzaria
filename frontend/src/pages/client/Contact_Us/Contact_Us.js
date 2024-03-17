import React, { useState } from 'react';
import './Contact_Us.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactus from '../../../assets/Contact us (1).gif';
import Layout from '../../../components/client/Layout';
import '../../../components/client/Header-2/Header-2.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const addFocus = (e) => {
        e.target.parentNode.parentNode.classList.add("focus");
    };

    const removeFocus = (e) => {
        if (e.target.value === "") {
            e.target.parentNode.parentNode.classList.remove("focus");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = [];

        if (!name.trim()) {
            errors.push('Name is required.');
        }

        if (!email.trim()) {
            errors.push('Email is required.');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.push('Invalid email format.');
            }
        }

        if (!message.trim()) {
            errors.push('Message is required.');
        }

        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
            return;
        }
    };

    return (
        <Layout>
            <div className="header-container">
                <h1 className="heading-text">Contact Us</h1>
                <p className="sub-text">Get in touch with us for inquiry!</p>
            </div>
            <div className="container">
                <div className="img">
                    <img src={contactus} alt="Pizza Maker" />
                </div>
                <div className="login-content">
                    <form onSubmit={handleSubmit}>
                        <h2 className="title">Contact Us</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Name</h5>
                                <input type="text" className="input" onFocus={addFocus} onBlur={removeFocus} value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="div">
                                <h5>Email</h5>
                                <input type="email" className="input" onFocus={addFocus} onBlur={removeFocus} value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-comment"></i>
                            </div>
                            <div className="div">
                                <h5>Message</h5>
                                <input type="text" className="input" onFocus={addFocus} onBlur={removeFocus} value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                        </div>
                        <input type="submit" className="btn" value="Send Message" />
                    </form>
                </div>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14685.701717313716!2d72.48832348715821!3d23.04485960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8d34fb0bf9%3A0x661ece96fceb57f3!2sRP&#39;s%20Pizzeria%20SBR%20%26%20i%20Contrast%20Ice%20Cream%20%26%20Thick%20Shake!5e0!3m2!1sen!2sin!4v1709996962391!5m2!1sen!2sin" width="1350" height="450" style={{ border: '3px solid #ff8243', borderRadius: '20px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of Our Location"></iframe>
                </div>

            </div>
        </Layout>
    );
}

export default ContactForm;
