import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Mentor from "./components/Mentor/Mentor";
import Home from "./components/Home/Home";
export default function App() {
  return (
    <div>
     {/* <Navbar/> */}
     <BrowserRouter>
        
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Mentor" element={<Mentor />} />
          <Route path="/" element={<Main/>}/>
        </Routes>
       
      </BrowserRouter>
     
    </div>
  );
}
