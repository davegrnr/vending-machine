import React from "react"
import './Broccoli.css'
import { NavLink } from "react-router-dom";

function Broccoli
() {
    return (
        <div>
            <h1>You hungrily eat your vending machine broccoli and question how you got here.</h1>
            <h2 className="Broccoli-link">
                <NavLink exact to="/">
                    Continue on your journey
                </NavLink>
            </h2>
        
            <img 
                src="https://media2.giphy.com/media/n8JWLbl3kJO/giphy.webp?cid=ecf05e47xdtws7gighetg74riueypmq5ljxg74twcskkybm8&rid=giphy.webp&ct=g"
                alt="Broccoli"
            />
        </div>
    )
}

export default Broccoli