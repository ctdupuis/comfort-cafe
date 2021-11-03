import React from 'react';
import '../../stylesheets/nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <div className="nav-container">
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
                    <NavLink to={"/locations"}>
                        Locations
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

                <div className="nav-item">
                    <NavLink to={"/careers"}>
                        Careers
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};
