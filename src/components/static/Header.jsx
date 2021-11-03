import React from 'react';
import '../../stylesheets/header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="banner">
            <div className="logo-container">
                <h2 className="logo">Comfort Café</h2>
            </div>
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
        </header>
    )
};
