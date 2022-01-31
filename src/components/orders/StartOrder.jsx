import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StartOrder({ currentUser, toggleOrderStart }) {
    
  return <div className="strict-flex space-center center">
    { currentUser ? 
        <button className="order-btn" onClick={toggleOrderStart}>Start your order</button>
      :
        <NavLink to={"/login"} className="order-btn">Please sign in to start an order</NavLink>
    }
    {/* <button className="order-btn" onClick={toggleOrderStart}>Start your order</button> */}
  </div>;
}
