import React from 'react';
import { FaShoppingCart} from 'react-icons/fa';

export default function Cart({ currentOrder, order, updateCurrentOrder }) {

    const itemCount = currentOrder.items.length;

    const calculateSubtotal = () => {
        let prices = currentOrder.items.map(item => {
            return parseFloat(item.price["$numberDecimal"])
        })
        let subtotal = prices.reduce((prev, current) => prev += current, 0);
        return subtotal
    }

    const calculateTax = () => {
        let subtotal = calculateSubtotal();
        let tax = subtotal * .0945;
        let final = Math.round(tax * 100) / 100
        return final
    }

    const calulateTotal = () => {
        let subtotal = calculateSubtotal();
        let tax = calculateTax(subtotal);
        let netTotal = subtotal += tax;
        let total = Math.round(netTotal * 100) / 100;
        // if (total !== 0) {
        //     updateCurrentOrder(prevState => {
        //         return {
        //             ...prevState,
        //             subtotal: subtotal,
        //             tax: tax,
        //             total: total
        //         }
        //     })
        // }
        return total
    }

    return <div className="cart-cont">
        <h3 style={{textAlign:"center"}}>Your cart </h3>
        <ul className="cart">
            <div className="cart-val">
                <li>Items:</li><li>{itemCount}</li>
            </div>
            <div className="cart-val">
                <li>Subtotal:</li><li>${calculateSubtotal()}</li>
            </div>
            <div className="cart-val">
                <li>Tax:</li><li>${calculateTax()}</li>
            </div>
            <div className="cart-val">
                <li>Total:</li><li>${calulateTotal()}</li>
            </div>
            <button>Checkout <FaShoppingCart /></button>
        </ul>
    </div>
}
