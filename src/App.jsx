import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import Product from "./component/Product";
import {Routes, Route } from "react-router-dom";
import HeroSection from "./component/HeroSection";
import Shirts from "./component/Shirts";
import Pents from "./component/Pents";
import Price from "./component/Price";





function App(){
    
    return(
        <div>
        {/* 
        <Main/>
        <Product/> */}

<Navbar/>
        <div className="text-center">
        <Routes>
        <Route path="/" element={<HeroSection/>} />
        
            <Route path="/main" element={<Main/>} /> 

            <Route path="/product" element={<Product/>} />
            <Route path="shirt" element={<Shirts/>} />
            <Route path="pents" element={<Pents/>} />

            <Route path="/price" element={<Price/>} />


       
        </Routes> 

        </div> 
        </div> 
    )
}
export default App;