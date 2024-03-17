import React from 'react';
import './Gallary.css';
import Layout from '../../../components/client/Layout';
import '../../../components/client/Header-2/Header-2.css';
const Gallery = () => {
    // Sample image URLs, replace these with your actual image URLs
    const imageUrls = [
        'https://images.pexels.com/photos/15126955/pexels-photo-15126955/free-photo-of-close-up-shot-of-a-slice-of-pizza.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/12046656/pexels-photo-12046656.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://media.istockphoto.com/id/1211782859/photo/shocked-delivery-man-in-red-uniform-hiding-behind-pizza-boxes-on-green.jpg?b=1&s=612x612&w=0&k=20&c=Zyi7C-dMw5IoXFtJpFuKyk_z1ytbqX-MP_DncW4LIlI=',
        'https://media.istockphoto.com/id/1072052430/photo/hands-of-young-people-taking-pizza-slices.jpg?b=1&s=612x612&w=0&k=20&c=JfPlnaXHl65mYsQ8ShcBRefEY4iXZQfBQPMmqJDUZU0=',
        'https://media.istockphoto.com/id/1437684530/photo/young-woman-signing-for-the-delivery.jpg?b=1&s=612x612&w=0&k=20&c=DpyAUeICKud40dnuOswr0BhMFGFLUUGuQ5Kh1TmSr70=',
        'https://images.pexels.com/photos/16962427/pexels-photo-16962427/free-photo-of-burgers-and-french-fries-in-box.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/19709551/pexels-photo-19709551/free-photo-of-delicious-vege-burger.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/12129480/pexels-photo-12129480.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5713766/pexels-photo-5713766.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5869812/pexels-photo-5869812.jpeg?auto=compress&cs=tinysrgb&w=600',
    ];

    return (
        <Layout>
            <div className="header-container">
                <h1 className="heading-text">Gallary</h1>
                <p className="sub-text">Explore our delicious offerings!</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '100px', marginRight: '50px', marginTop: '50px', marginBottom: '50px' }}>
                {imageUrls.map((url, index) => (
                    <div key={index} className="image-container">
                        <img src={url} alt='imgs' className="image" />
                        <div className="overlay">
                            <p className="overlay-text">Pizzaria</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Gallery;
