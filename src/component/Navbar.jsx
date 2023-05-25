import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='bg-danger text-center text-white fw-bold'>
            <ul style={{
                listStyle: "none", display: "flex", justifyContent: "center"
            }}>
                <li className='mx-5'> <Link to="/">Home</Link ></li>
                <li className='mx-5'> <Link to="/main">Main</Link ></li>
                <li className='mx-5'> <Link to="/product">Product</Link ></li>
                <li className='mx-5'> <Link to="/price">Price</Link ></li>

            </ul>
        </div>
    )
}

export default Navbar
