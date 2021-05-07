import React from "react"
import './Surstromming.css'
import { NavLink } from "react-router-dom";

function Surstromming() {
    return (
        <div>
            <h1>YUCK! Poor choice...</h1>
            <h2 className="Surstromming-link">
                <NavLink exact to="/">
                    Make a different choice
                </NavLink>
            </h2>
            
            <img 
                src="https://image.shutterstock.com/image-photo/minsk-belarus-111818-oskars-isolated-600w-1235702833.jpg"
                alt="Can of surstromming"
            />


        </div>
    )
}

export default Surstromming