import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StartOrder({ currentUser, toggleOrderStart, order, handleOrderStart }) {
    
    const key = order ? true : false

    const buttonHandler = {
        true: {
            text: "Continue your order",
            fn: toggleOrderStart
        },
        false: {
            text: "Start your order",
            fn: handleOrderStart
        }
    }

    return <div className="strict-flex space-center center">
        { currentUser ? 
            <button className="order-btn" onClick={buttonHandler[key].fn}>{buttonHandler[key].text}</button>
        :
            <NavLink to={"/login"} className="order-btn">Please sign in to start an order</NavLink>
        }
    </div>;
}
