import React from 'react';

import { useStateValue } from '../../Context/StateProvider';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';

import './payment.css';

const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket.length} items</Link>)
                </h1>
                {/* Payment Section - Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>410, Horner Street</p>
                        <p>Youngstown, OH</p>
                    </div>
                </div>

                {/* Payment Section - Review Item */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

                {/* Payment Section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
