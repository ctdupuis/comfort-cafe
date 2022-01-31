import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StartOrder({ currentUser, toggleOrderStart, order }) {
    
    const textHandler = order ? "Continue your order" : "Start your order"

    return <div className="strict-flex space-center center">
        { currentUser ? 
            <button className="order-btn" onClick={toggleOrderStart}>{textHandler}</button>
        :
            <NavLink to={"/login"} className="order-btn">Please sign in to start an order</NavLink>
        }
    </div>;
}
