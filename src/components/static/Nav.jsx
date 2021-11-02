import React from 'react';
import '../../stylesheets/nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <div class="nav-container">
                <div class="nav-item">
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </div>

                <div class="nav-item">
                    <NavLink to={"/menu"}>
                        Menu
                    </NavLink>
                </div>

                <div class="nav-item">
                    <NavLink to={"/locations"}>
                        Locations
                    </NavLink>
                </div>

                <div class="nav-item">
                    <NavLink to={"/order"}>
                        Order
                    </NavLink>
                </div>

                <div class="nav-item">
                    <NavLink to={"/about"}>
                        About us 
                    </NavLink>
                </div>

                <div class="nav-item">
                    <NavLink to={"/careers"}>
                        Careers
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};
