import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserHead({ currentUser }) {
    return (
        <div className="auth-container">
            <div className="auth-item">
                Welcome, person
            </div>
            <div className="auth-item">
                <NavLink to={"/"}>
                    Log out
                </NavLink>
            </div>
        </div>
    )
}
