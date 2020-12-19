import React from 'react';

import CheckOutAdd from '../../assets/checkoutAdd.jpg';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import SubTotal from '../../components/Subtotal/SubTotal';
import { useStateValue } from '../../Context/StateProvider';

import './checkout.css';

const Checkout = () => {

    const [ { basket }, dispatch ] = useStateValue();

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
                    {basket.map((item) => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
