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
                <NavLink to={"/menu"}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to={"/menu"}>
                    Order
                </NavLink>
            </li>
            <li>
                <NavLink to={"/menu"}>
                    About us
                </NavLink>
            </li>
            <li>
                <NavLink to={"/menu"}>
                    Careers
                </NavLink>
            </li>
        </ul>
    )
}