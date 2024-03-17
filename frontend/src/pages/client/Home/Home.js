import React from 'react';
import './Home.css';
import bgimg from '../../../assets/pizza-bg.png';
import Layout from '../../../components/client/Layout';
import pizzaImg from '../../../assets/pizza-img-v (1).jpg';
import videoSrc from '../../../assets/video (2160p).mp4';
import ServiceInfo from './ServiceInfo'; // Import ServiceInfo component

const Home = () => {
    return (
        <Layout>
            <section className='home-content'>
                <div className="home-left-content">
                    <h1 className="home-heading">Welcome to Our Pizzaria!👨‍🍳</h1>
                    <p className="home-caption">Delight Your Taste Buds with Our Authentic Pizzas</p>
                    <p className="home-sub-caption">Crafted with Care and Premium Ingredients.</p>
                    <p className="home-sub-caption">Enjoy the Ultimate Pizza Experience!</p> {/* Additional caption */}
                    <button className="view-menu-button">View Menu</button>
                </div>
                <div className="home-right-content">
                    <img src={bgimg} alt="Pizza Delivery" className="pizza-image" />
                </div>
            </section>

            <section className="about-sec section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sec-title text-center mb-5">
                                <p className="sec-sub-title mb-3">About Us</p>
                                <h2 className="h2-title">Explore the Journey of Pizzaria</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-video">
                                <div className="about-video-img">
                                    <img src={pizzaImg} alt='pizzimg' />
                                </div>
                                <div className="play-btn-wp">
                                    <a href={videoSrc} data-fancybox="video" className="play-btn">
                                        <i className="uil uil-play"></i>
                                    </a>
                                    <span>Watch The Recipe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-service" id="home-service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sec-title text-center mb-5">
                                <p className="sec-sub-title mb-3">Services</p>
                                <h2 className="h2-title">Discover Our Comprehensive Services!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceInfo />
        </Layout >
    );
}

export default Home;
