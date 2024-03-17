import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrderDetails.css'; // Import your CSS file for styling
import pizza1 from '../../../assets/pizza1.png';
import pizza2 from '../../../assets/pizza2.png';

const OrderDetail = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        state: '',
        address: '',
        zipCode: ''
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any field is empty
        for (const key in formData) {
            if (!formData[key]) {
                toast.error(`${key.charAt(0).toUpperCase() + key.slice(1)} is required`);
                return;
            }
        }
        // Your checkout logic here
        toast.success('Order placed successfully!');
    };

    // Function to handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="order-detail-container">
            <div className="order-detail-box">
                <div className="redirect-icon-3">
                    <a href='/cart' alt='menupage'><i className="fas fa-times"></i></a>
                </div>
                {/* Left Part */}
                <div className="left-part">
                    <h2 className='heading-order'>Product Information</h2>
                    <div className="product-info-order">
                        <div className="product-item">
                            <img src={pizza1} alt="Product" />
                            <div className="product-details-order">
                                <p><span className="detail-label">Name:</span> <span className="detail-value">Farm Fresh</span></p>
                                <p><span className="detail-label">Size:</span> <span className="detail-value">S</span></p>
                                <p><span className="detail-label">Price:</span> <span className="detail-value">₹235</span></p>
                                <p><span className="detail-label">Quantity:</span> <span className="detail-value">2</span></p>
                                <p><span className="detail-label">Subtotal:</span> <span className="detail-value">₹470</span></p>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src={pizza2} alt="Product" />
                            <div className="product-details-order">
                                <p><span className="detail-label">Name:</span> <span className="detail-value">Salsa Mexicano</span></p>
                                <p><span className="detail-label">Size:</span> <span className="detail-value">S</span></p>
                                <p><span className="detail-label">Price:</span> <span className="detail-value">₹255</span></p>
                                <p><span className="detail-label">Quantity:</span> <span className="detail-value">2</span></p>
                                <p><span className="detail-label">Subtotal:</span> <span className="detail-value">₹510</span></p>
                            </div>
                        </div>

                    </div>
                    <div className="order-summary">
                        <h2 className='heading-order'>Order Summary</h2>
                        <p>Total: ₹940.00</p>
                    </div>
                </div>
                {/* Right Part */}
                <div className="right-part">
                    <h2 className='heading-order'>Shipping Information</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
                        <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
                        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" />
                        <button type="submit">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
