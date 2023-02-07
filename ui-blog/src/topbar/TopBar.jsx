import React from "react";
import "./topbar.css";

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">L 
             <i class="fa-brands fa-facebook"></i>
             <i class="fa-brands fa-twitter"></i>
             <i class="fa-brands fa-pinterest"></i>
             <i class="fa-brands fa-square-instagram"></i></div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGIN</li>
                    
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="" alt="" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}