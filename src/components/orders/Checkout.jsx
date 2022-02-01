import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { GrClear } from 'react-icons/gr'

export default function Checkout({ order, toggleCheckout }) {
    const itemCount = order.items.length;
    const total = order.total["$numberDecimal"];
    const tax = order.tax["$numberDecimal"];
    const subtotal = order.subtotal["$numberDecimal"];

  return <div className="cart-cont">
    <h3 style={{textAlign:"center"}}>Checkout</h3>
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
            <div className="strict-flex">
                <button className="cart-btn"><GiCheckMark className="check-icon" />Confirm</button>
                <button className="cart-btn cancel" onClick={toggleCheckout}><GrClear className="clear-icon" />Cancel</button>
            </div>
                
        </ul>
    </div>;
}
