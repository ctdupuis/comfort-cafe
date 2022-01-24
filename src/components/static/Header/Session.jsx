import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Session() {
    return (
        <div className="auth-container">
            <div className="auth-item">
                <NavLink to={"/register"}>
                    Sign up
                </NavLink>
            </div>
            <div className="auth-item">
                <NavLink to={"/login"}>
                    Log in
                </NavLink>
            </div>
        </div>
    )
}
