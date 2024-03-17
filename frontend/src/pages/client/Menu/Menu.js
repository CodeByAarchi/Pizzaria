import React, { useState } from 'react';
import './Menu.css';
import pizza from '../../../assets/pizza.png';
import snacks from '../../../assets/french-fries.png';
import drinks from '../../../assets/soda.png';
import pizza1 from '../../../assets/pizza1.png';
import pizza2 from '../../../assets/pizza2.png';
import pizza3 from '../../../assets/pizza3.png';
import pizza4 from '../../../assets/pizza4.png';
import pizza5 from '../../../assets/pizza5.png';
import pizza6 from '../../../assets/pizza6.png';
import pizza7 from '../../../assets/pizza7.png';
import pizza8 from '../../../assets/pizza8.png';
import frenki1 from '../../../assets/frenkie (1).png';
import frenki2 from '../../../assets/frenkie (2).png';
import frenki3 from '../../../assets/frenkie (3).png';
import frenki4 from '../../../assets/frenkie (4).png';
import pasta1 from '../../../assets/pasta (1).png';
import pasta2 from '../../../assets/pasta (2).png';
import pasta3 from '../../../assets/pasta (3).png';
import pasta4 from '../../../assets/pasta (4).png';
import drink1 from '../../../assets/drink (1).png';
import drink2 from '../../../assets/drink (2).png';
import drink3 from '../../../assets/drink (3).png';
import drink4 from '../../../assets/drink (4).png';
import drink5 from '../../../assets/drink (5).png';
import drink6 from '../../../assets/drink (6).png';
import drink7 from '../../../assets/drink (7).png';
import drink8 from '../../../assets/drink (8).png';
import Layout from '../../../components/client/Layout';

const foodTypeIcons = {
    "Veg": "🥦",
    "Non-veg": "🍗",
    "Calories": "🔥"
};

const CategoryFilter = ({ onSelect }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        { name: 'All', image: pizza },
        { name: 'Pizza', image: pizza },
        { name: 'Snack', image: snacks },
        { name: 'Drink', image: drinks },

    ];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        onSelect(category);
    };

    const ProductCard = ({ image, name, price, type, calories, onAddToCart }) => {
        return (
            <div className="product-card">
                <div className="product-image-container">
                    <img className="product-image" src={image} alt={name} />
                </div>
                <div className="product-details-menu">
                    <h3 className="product-name">{name}</h3>
                    <p className="product-price">
                        <span className="highlight">₹{price}</span>
                    </p>
                    <div className="product-info">
                        <span className="type">
                            {type === 'Non-veg' ? foodTypeIcons['Non-veg'] : foodTypeIcons['Veg']} {type}
                        </span>
                        <span>|</span>
                        <span className="calories">
                            {foodTypeIcons['Calories']} {calories} calories
                        </span>
                    </div>
                    <button className="view-details-btn" onClick={onAddToCart}>View Details</button>
                </div>
            </div>
        );
    };

    const products = [
        { image: pizza1, name: "Farm Fresh", price: "235", type: "Veg", calories: 300 },
        { image: pizza2, name: "Salsa Mexicano", price: "255", type: "Veg", calories: 400 },
        { image: pizza3, name: "Crazy Korma Pizza", price: "235", type: "Veg", calories: 200 },
        { image: pizza4, name: "Mexicano Pizza", price: "235", type: "Veg", calories: 150 },
        { image: pizza5, name: "Red & Yellow Bell Pepper,Paneer Pizza", price: "235", type: "Veg", calories: 200 },
        { image: pizza6, name: "Capsicum & Paneer Pizza", price: "235", type: "Veg", calories: 150 },
        { image: pizza7, name: "Golden Corn & Cheese Pizza", price: "235", type: "Veg", calories: 200 },
        { image: pizza8, name: "Jalapeno, Olives & Cheese Pizza", price: "235", type: "Veg", calories: 150 },
        { image: frenki1, name: "Schezwan Paneer & Red Paprika Tacos", price: "149", type: "Veg", calories: 150 },
        { image: frenki2, name: "Mushroom Corn & Onion Tacos", price: "149", type: "Veg", calories: 150 },
        { image: frenki3, name: "Paneer & Corn Tacos", price: "149", type: "Veg", calories: 150 },
        { image: frenki4, name: "Paneer Tikka & Red Paprika Tacos", price: "149", type: "Veg", calories: 150 },
        { image: pasta1, name: "Spicy Maxi Pasta", price: "169", type: "Veg", calories: 150 },
        { image: pasta2, name: "Smoke Chilly Mac", price: "169", type: "Veg", calories: 150 },
        { image: pasta3, name: "Mac & Cheese Veg", price: "169", type: "Veg", calories: 150 },
        { image: pasta4, name: "Cheesy White Sauce Pasta", price: "169", type: "Veg", calories: 150 },
        { image: drink1, name: "Sprite (250 Ml)", price: "19.05", type: "Veg", calories: 150 },
        { image: drink2, name: "Thumps Up Tin (300 Ml)", price: "38.10", type: "Veg", calories: 150 },
        { image: drink3, name: "Coke Tin (300 Ml)", price: "38.10", type: "Veg", calories: 150 },
        { image: drink4, name: "Redbul (300 Ml)", price: "118.74", type: "Veg", calories: 150 },
        { image: drink5, name: "Dite Coke (300 Ml)", price: "38.10", type: "Veg", calories: 150 },
        { image: drink6, name: "Fanta Tin (300 Ml)", price: "38.10", type: "Veg", calories: 150 },
        { image: drink7, name: "Sprite Tin (300 Ml)", price: "38.10", type: "Veg", calories: 150 },
        { image: drink8, name: "Thumps Up (250 Ml)", price: "19.50", type: "Veg", calories: 150 },
    ];

    return (
        <Layout>
            <div className='menu' id='menu'>
                <div className="header-container">
                    <h1 className="heading-text">Menu</h1>
                    <p className="sub-text">Discover Our Delicious Pizza Selections!</p>
                </div>
                <div className="category-filter">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
                            onClick={() => handleCategorySelect(category.name)}
                        >
                            <img src={category.image} alt={category.name} className="category-image" />
                            {category.name}
                        </div>
                    ))}
                </div>

                <div className="product-list-menu">
                    <div className="product-container-menu">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                type={product.type}
                                calories={product.calories}
                                onAddToCart={() => console.log("View details clicked")}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CategoryFilter;
