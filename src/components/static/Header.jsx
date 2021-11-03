import React from 'react';
import '../../stylesheets/header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header class="banner">
            <div class="logo-container">
                <h2 class="logo">Comfort Café</h2>
            </div>
            <div class="auth-container">
                <div class="auth-item">
                    <NavLink to={"/register"}>
                        Sign up
                    </NavLink>
                </div>
                <div class="auth-item">
                    <NavLink to={"/login"}>
                        This is the Login page
                    </NavLink>
                </div>
            </div>
        </header>
    )
};
