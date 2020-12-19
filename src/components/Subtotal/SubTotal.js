import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Context/reducer';
import { useStateValue } from '../../Context/StateProvider';

import './subtotal.css';

const SubTotal = () => {

    const [ { basket }, dispatch ] = useStateValue();

    // console.log(">>>",basket);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                                This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"﹩"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
