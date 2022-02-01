import React from 'react';
import { FaShoppingCart} from 'react-icons/fa';

export default function Cart({ currentOrder, order, updateCurrentOrder }) {

    const itemCount = order.items.length;
    const total = order.total["$numberDecimal"];
    const tax = order.tax["$numberDecimal"];
    const subtotal = order.subtotal["$numberDecimal"];

    return <div className="cart-cont">
        <h3 style={{textAlign:"center"}}>Your cart </h3>
        <ul className="cart">
            <div className="cart-val">
                <li>Items:</li><li>{itemCount}</li>
            </div>
            <div className="cart-val">
                <li>Subtotal:</li><li>${subtotal}</li>
            </div>
            <div className="cart-val">
                <li>Tax:</li><li>${tax}</li>
            </div>
            <div className="cart-val">
                <li>Total:</li><li>${total}</li>
            </div>
            <button>Checkout <FaShoppingCart /></button>
        </ul>
    </div>
}
