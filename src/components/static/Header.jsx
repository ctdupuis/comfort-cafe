import React from 'react'

export default function Header() {
    return (
        <header class="banner">
            <div class="logo-container">
                <h2 class="logo">Comfort Café</h2>
            </div>
            <div class="auth-container">
                <div class="auth-item">
                    <a href="#">Sign up</a>
                </div>
                <div class="auth-item">
                    <a href="#">Log in</a>
                </div>
            </div>
        </header>
    )
};
