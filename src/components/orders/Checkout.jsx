import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { GrClear } from 'react-icons/gr'

export default function Checkout({ order, toggleCheckout, handleConfirm }) {
    const [payment, setPayment] = useState("Cash");
    const [ccValues, setccValues] = useState({
        name: "",
        cc1: "",
        cc2: "",
        cc3: "",
        cc4: "",
        cc5: "",
        cc6: ""
    })
    const [gcValue, setGcValue] = useState("");

    const itemCount = order.items.length;
    const total = order.total["$numberDecimal"];
    const tax = order.tax["$numberDecimal"];
    const subtotal = order.subtotal["$numberDecimal"];

    const handleCreditInputs = e => {
        let numOfFields = 6;
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        
        if (value.length >= maxLength) {
            if (parseInt(fieldIndex, 10) < numOfFields) {
                const nextSibling = document.querySelector(
                    `input[name=cc-${parseInt(fieldIndex, 10) + 1}]`
                );
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }
        }

        
        setccValues({
            ...ccValues,
            [`cc${fieldIndex}`]: value
        })
    }

    const handleChange = e => setccValues({...ccValues, [e.target.name]: e.target.value })

    const credit = () => {
        return(<div className="form-group">
            <div className="strict-flex center space-center">
                <label>Name on Card</label>
                <input type="text" name="name" onChange={handleChange} value={ccValues.name} />
            </div>
            <div className="strict-flex center space-center">
                <label>Card Number</label>

                <input className="cc" name="cc-1" type="text" onChange={handleCreditInputs} maxLength={4} value={ccValues.cc1} />-

                <input className="cc" name="cc-2" type="text" onChange={handleCreditInputs} maxLength={4} value={ccValues.cc2} />-

                <input className="cc" name="cc-3" type="text" onChange={handleCreditInputs} maxLength={4} value={ccValues.cc3} />-

                <input className="cc" name="cc-4" type="text" onChange={handleCreditInputs} maxLength={4} value={ccValues.cc4} />
            </div>
            <div className="strict-flex center space-center">
                <label htmlFor="cc-5">Expiration</label>
                <input className="exp" name="cc-5" type="text" onChange={handleCreditInputs} maxLength={4} value={ccValues.cc5} />
            </div>
            <div className="strict-flex center space-center">
                <label htmlFor="cc-6">Cvv</label>
                <input className="cvv" name="cc-6" type="text" onChange={handleCreditInputs} maxLength={3} value={ccValues.cc6} />
            </div>
        </div>)
    }

    const gift = () => {
        return(
            <div className="form-group">
                <div className="strict-flex center space-center">
                    <label htmlFor="gc">Card Number</label>
                    <input onChange={e => setGcValue(e.target.value)} name="gc" type="text" value={gcValue} />
                </div>
            </div>
        )
    }

    const cash = () => {
        return <span>*Please have cash ready at pickup*</span>
    }

    const payHandler = {
        "Cash": cash(),
        "Credit Card": credit(),
        "Gift Card": gift()
    }

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
                <div className="strict-flex col center">
                    <select className="payment" onChange={(e) => setPayment(e.target.value)}>
                        <option>Cash</option>
                        <option>Credit Card</option>
                        <option>Gift Card</option>
                    </select>
                    {payHandler[payment]}
                </div>
                <div className="strict-flex">
                    <button onClick={handleConfirm} className="cart-btn"><GiCheckMark className="check-icon" />Confirm</button>
                    <button className="cart-btn cancel" onClick={toggleCheckout}><GrClear className="clear-icon" />Cancel</button>
                </div>
            </ul>
        </div>;
}
