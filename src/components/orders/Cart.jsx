import React from 'react';

export default function Cart({ currentOrder }) {

    const calculateSubtotal = () => {
        let prices = currentOrder.items.map(item => {
            return parseFloat(item.price["$numberDecimal"])
        })
        return prices.reduce((prev, current) => prev += current, 0)
    }

    const itemCount = currentOrder.items.length;
    // const subtotal = calculateSubtotal();
    // const tax = calculateTax();

    const calculateTax = () => {
        let subtotal = calculateSubtotal();
        let tax = subtotal * .0945
        return Math.round(tax * 100) / 100
    }

    const calulateTotal = () => {
        let subtotal = calculateSubtotal();
        let tax = calculateTax(subtotal);
        let total = subtotal += tax;
        return Math.round(total * 100) / 100
    }

    return <div className="cart-cont">
        <ul className="cart">
            <div className="cart-val">
                <li>Items:</li><li>{itemCount}</li>
            </div>
            <div className="cart-val">
                <li>Subtotal:</li><li>{calculateSubtotal()}</li>
            </div>
            <div className="cart-val">
                <li>Tax:</li><li>{calculateTax()}</li>
            </div>
            <div className="cart-val">
                <li>Total:</li><li>{calulateTotal()}</li>
            </div>
            <button>Checkout</button>
        </ul>
    </div>
}
