import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileMenu() {
    return (
        <ul id="menu">
            <li>
                <NavLink to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/menu"}>
                    Menu
                </NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to={"/order"}>
                    Order
                </NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>
                    About us
                </NavLink>
            </li>
        </ul>
    )
}
