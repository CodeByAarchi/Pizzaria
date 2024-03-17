import React from 'react';
import pizza1 from '../../../assets/pizza1.png'; // Import the image
import './ProductDetails.css'

const ProductDetails = () => {
    // Sample product data
    const product = {
        name: 'Salsa Mexicano',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 19.99,
        calories: 300,
        type: 'Veg',
        image: pizza1 // Use the imported image directly
    };

    // Emoji icons for food types and calories
    const foodTypeIcons = {
        "Veg": "🥦",
        "Non-veg": "🍗",
        "Calories": "🔥"
    };


    return (
        <div className='product-details'>
            <div className="redirect-icon">
                <a href='/menu' alt='menupage'><i className="fas fa-times"></i></a>
            </div>

            <div className="product-details-container">
                {/* Product Image */}
                <div className="product-detail-image-container">
                    <img src={product.image} alt={product.name} className="product-detail-image" />
                </div>

                {/* Product Information */}
                <div className="product-info-container">
                    {/* Product Name */}
                    <h2 className="product-detail-name">{product.name}</h2>

                    {/* Product Description */}
                    <p className="product-description">{product.description}</p>

                    {/* Product Type and Calories */}
                    <div className="product-type-calories">
                        <span>{foodTypeIcons[product.type]}{product.type} </span>
                        <span>{foodTypeIcons['Calories']}{product.calories}</span>
                    </div>

                    {/* Product Price */}
                    <p className="product-detail-price">Price: ${product.price}</p>

                    {/* Add to Cart Button */}
                    <button className='add-to-cart-btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
