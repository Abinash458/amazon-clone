import React from 'react';

import CheckOutAdd from '../../assets/checkoutAdd.jpg';
import SubTotal from '../../components/Subtotal/SubTotal';

import './checkout.css';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src={CheckOutAdd}
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">
                        Shopping Basket
                    </h2>
                </div>
            </div>

            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
