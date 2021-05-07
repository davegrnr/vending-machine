import React from "react"
import './IcedCoffee.css'
import { NavLink } from "react-router-dom";

function IcedCoffee
() {
    return (
        <div>
            <h1>You probably chose the best option here...</h1>
            <h2 className="IcedCoffee
            -link">
                <NavLink exact to="/">
                    Now you're jacked! Go buy more stuff!
                </NavLink>
            </h2>

            <img 
                src="https://media4.giphy.com/media/3qiSKtJcGXPSmoevRi/200w.webp?cid=ecf05e47gb7tbp1pyvi2qouikg1a4gl3e0pwypzye4g470de&rid=200w.webp&ct=g"
                alt="Iced Coffee
                "
            />


        </div>
    )
}

export default IcedCoffee