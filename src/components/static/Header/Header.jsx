import React from 'react';
import '../../../stylesheets/header.css';

import Session from './Session';
import UserHead from './UserHead';

export default function Header({ currentUser, logout, history }) {
    return (
        <header className="banner">
            <div className="logo-container">
                <h2 className="logo">Comfort Café</h2>
            </div>
            { currentUser ? 
                <UserHead currentUser={currentUser} logout={logout} history={history}/> 
                :
                <Session />
            }
        </header>
    )
};
