import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
return (
    <nav className="NavBar">
        
        <ul>
        <h3>Make your choice!</h3>

            <li>
                <NavLink exact to="/surstromming">
                Mmmm...Surstromming!
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/icedcoffee">
                Iced Coffee
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/broccoli">
                Broccoli
                </NavLink>
            </li>

        </ul>
    </nav>
);
}

export default NavBar;
