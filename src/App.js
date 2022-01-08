import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/reglog/Login";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Routes>
        <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
