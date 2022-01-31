import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserHead({ currentUser, logout, history }) {
    const name = currentUser ? currentUser.name.first : null
    return (
        <div className="auth-container">
            <div className="auth-item">
                <a style={{textDecoration: "none"}} disabled={true}>Welcome, {name}</a>
            </div>
            <div className="auth-item">
                <NavLink to={"/"} onClick={() => logout(history)}>
                    Log out
                </NavLink>
            </div>
        </div>
    )
}
