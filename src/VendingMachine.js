import React from 'react'
import Navbar from './Navbar'
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className="VendingMachine-div">
            <div >
            <h1 className="VendingMachine-h1-div">Welcome to the worst vending machine!</h1>
            </div>
            <img
                className="VendingMachine-img" 
                src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"></img>
            <span><Navbar /></span>

        </div>

    )
}

export default VendingMachine