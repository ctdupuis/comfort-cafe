import React, { useState } from 'react';
import '../../../stylesheets/nav.css';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav>
            <div className="nav-container">
                <div className="menu-container" onClick={toggleMenu}>
                    <input type="checkbox"  />
                    <span></span>
                    <span></span>
                    <span></span>
                    {
                        menuOpen ? <MobileMenu /> : null
                    }
                </div>
                <div className="nav-item">
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </div>

                <div className="nav-item">
                    <NavLink to={"/menu"}>
                        Menu
                    </NavLink>
                </div>

                <div className="nav-item">
                    <NavLink to={"/contact"}>
                        Contact
                    </NavLink>
                </div>

                <div className="nav-item">
                    <NavLink to={"/order"}>
                        Order
                    </NavLink>
                </div>

                <div className="nav-item">
                    <NavLink to={"/about"}>
                        About us 
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};
