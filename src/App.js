import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine'
import Navbar from './Navbar'
import Surstromming from './Surstromming'
import IcedCoffee from './IcedCoffee';
import Broccoli from './Broccoli';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/surstromming">
          <Surstromming />
        </Route>
        <Route exact path="/icedcoffee">
          <IcedCoffee />
        </Route>
        <Route exact path="/broccoli">
          <Broccoli />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
