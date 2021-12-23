import React from 'react'
import './Topbar.css'
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <>
            <div class="yellowStrip">
                <center>Free Shipping on All Orders | Get Extra ₹100 OFF on Spent of ₹999 Use Code: BEYOUNG100</center>
            </div>
            <div class="blackStrip">
                <div class="insideBlackStrip">
                <a href="#home">TrackOrder</a>
                <span style={{float:'right'}}> <Link to="/loginsignup">  Login/Signup</Link></span>
                </div>
            </div>
        </>
    )
}

export default TopBar
