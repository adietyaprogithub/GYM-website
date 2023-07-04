import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Training from "../Training/Training";
import Pricing from "../Pricing.js/Pricing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Mentor from "../Mentor/Mentor";
import './Main.css'

export default function Main() {
  return (
    <div>
      <Navbar/>
      
      <Home/>
      <div className="line"></div>
      <About/>
      <div className="line"></div>
      <Training/>
      <div className="line"></div>
      <Pricing/>
      <div className="line"></div>
      <Footer />
    </div>
   
  );
}
