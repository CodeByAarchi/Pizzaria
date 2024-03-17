import React, { useState } from 'react';
import './Payment.css';
import payimg from '../../../assets/Top up credit.gif';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardholderName, setCardholderName] = useState('');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpirationDateChange = (e) => {
        setExpirationDate(e.target.value);
    };

    const handleCvcChange = (e) => {
        setCvc(e.target.value);
    };

    const handleCardholderNameChange = (e) => {
        setCardholderName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (paymentMethod === 'cashOnDelivery') {
            // Handle cash on delivery payment
            console.log('Payment method: Cash on delivery');
        } else if (paymentMethod === 'stripe') {
            if (!email || !cardNumber || !expirationDate || !cvc || !cardholderName) {
                toast.error('Please fill in all fields.');
                return;
            }
            // Handle Stripe payment
            console.log('Payment method: Stripe');
            console.log('Email:', email);
            console.log('Card number:', cardNumber);
            console.log('Expiration date:', expirationDate);
            console.log('CVC:', cvc);
            console.log('Cardholder name:', cardholderName);
        }
    };
    
    return (
        <div className="payment-container-all">
            <div className="img-pay">
                <img src={payimg} alt="Pizza Maker" />
            </div>
            <div className="payment-container">
                <h2 className="payment-heading">Payment Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="cashOnDelivery"
                            value="cashOnDelivery"
                            checked={paymentMethod === 'cashOnDelivery'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                    </div>
                    <div className="payment-option">
                        <input
                            type="radio"
                            id="stripe"
                            value="stripe"
                            checked={paymentMethod === 'stripe'}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="stripe">Pay using Stripe</label>
                    </div>
                    {paymentMethod === 'stripe' && (
                        <div>
                            <input
                                type="email"
                                className="payment-input"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <input
                                type="text"
                                className="half-width payment-input"
                                placeholder="Card Number"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                            />
                            <div className="half-width">
                                <input
                                    type="date"
                                    className="payment-input"
                                    placeholder="Expiration Date (MM/YYYY)"
                                    value={expirationDate}
                                    onChange={handleExpirationDateChange}
                                />
                                <input
                                    type="text"
                                    className="payment-input"
                                    placeholder="CVC/CVV"
                                    value={cvc}
                                    onChange={handleCvcChange}
                                />
                            </div>
                            <input
                                type="text"
                                className="payment-input"
                                placeholder="Cardholder Name"
                                value={cardholderName}
                                onChange={handleCardholderNameChange}
                            />
                        </div>
                    )}
                    <button type="submit" className="payment-button">Pay</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
