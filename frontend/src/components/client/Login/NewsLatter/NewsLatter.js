import React, { useState } from 'react';
import './NewsLatter.css';
import newsImg from '../../../../assets/news.jpg';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted email:', email);
        setEmail('');
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <section className="about-sec section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center mb-5">
                            <p className="sec-sub-title mb-3">News Latter</p>
                            <h2 className="h2-title">Our Latest Newsletter Delivers News Straight to Your Inbox!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="newsletter-box text-center back-img"
                                    style={{ backgroundImage: `url(${newsImg})`, color: 'white' }}>
                                    <div className=" bg-overlay dark-overlay"></div>
                                    <div className="sec-wp">
                                        <div className="text">
                                            <h2 className="h2-title">Subscribe Our newsletter</h2>
                                            <p>📰Stay ahead with our curated news and analysis. Subscribe now!</p>
                                        </div>
                                        <form onSubmit={handleSubmit} className="newsletter-form">
                                            <input
                                                type="email"
                                                className="form-input"
                                                placeholder="Enter your Email Here"
                                                value={email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <button type="submit" className="sec-btn primary-btn">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default NewsletterForm;
