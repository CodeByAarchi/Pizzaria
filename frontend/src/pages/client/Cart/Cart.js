import React, { useState } from 'react';
import pizza1 from '../../../assets/pizza4.png';
import pizza2 from '../../../assets/pizza2.png'; // New product image
import './Cart.css'; // Import your CSS file
import { FaTrash } from 'react-icons/fa'; // Import the trash icon from react-icons/fa

const AddToCartPage = () => {
    const [items, setItems] = useState([
        {
            quantity: 1,
            size: 'S'
        },
        {
            quantity: 1,
            size: 'S'
        }
    ]);

    const product = {
        name: 'Salsa Mexicano',
        basePrice: 235,
        image: pizza1,
        sizes: {
            'S': 1,
            'M': 1.1,
            'L': 1.2,
            'XL': 1.3
        }
    };

    const newProduct = {
        name: 'Margherita',
        basePrice: 255,
        image: pizza2, // Updated image for the second product
        sizes: {
            'S': 1,
            'M': 1.2,
            'L': 1.4,
            'XL': 1.5
        }
    };

    const incrementQuantity = (index) => {
        const newItems = [...items];
        newItems[index].quantity += 1;
        setItems(newItems);
    };

    const decrementQuantity = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity > 1) {
            newItems[index].quantity -= 1;
            setItems(newItems);
        }
    };

    const handleChangeSize = (e, index) => {
        const newSize = e.target.value;
        const newItems = [...items];
        newItems[index].size = newSize;
        setItems(newItems);
    };

    const getPriceForSize = (size, product) => {
        const priceMultiplier = product.sizes[size];
        return product.basePrice * priceMultiplier;
    };

    const getSubtotalForItem = (item, product) => {
        const priceForSize = getPriceForSize(item.size, product);
        return item.quantity * priceForSize;
    };

    const total = items.reduce((acc, item) => acc + getSubtotalForItem(item, product), 0);

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <table className="cart-container">
             <div className="redirect-icon-2">
                <a href='/menu' alt='menupage'><i className="fas fa-times"></i></a>
            </div>
            <thead>
                <tr>
                    <th colSpan="5" className="cart-heading">Your Cart</th>
                </tr>
                <tr>
                    <th>Product</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <img src={index === 0 ? product.image : newProduct.image} alt="Product" className="cart-product-image" />
                            <div className="cart-product-info">
                                <div className="cart-product-name">{index === 0 ? product.name : newProduct.name}</div>
                            </div>
                        </td>
                        <td className="select-container">
                            <select value={item.size} onChange={(e) => handleChangeSize(e, index)}>
                                {Object.keys(index === 0 ? product.sizes : newProduct.sizes).map((sizeOption) => (
                                    <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                                ))}
                            </select>
                        </td>
                        <td>₹{getPriceForSize(item.size, index === 0 ? product : newProduct)}</td>
                        <td>
                            <div className="quantity-selector">
                                <button onClick={() => decrementQuantity(index)}>-</button>
                                <input type="text" value={item.quantity} readOnly />
                                <button onClick={() => incrementQuantity(index)}>+</button>
                            </div>
                        </td>
                        <td className="cart-subtotal">₹{getSubtotalForItem(item, index === 0 ? product : newProduct).toFixed(0)}</td>
                        <td>
                            <button onClick={() => removeItem(index)} className="remove-button">
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan="4"></td>
                    <td className="total-cell">Total:</td>
                    <td className="cart-total">₹{total.toFixed(0)}</td>
                </tr>
                <tr>
                    <td colSpan="5" className="checkout-row">
                        <button className="checkout-button">Checkout</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default AddToCartPage;
