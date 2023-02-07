import React from "react";
import "./topbar.css";

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft"> 
             <i className="topIcon fa-brands fa-facebook"></i>
             <i className="topIcon fa-brands fa-twitter"></i>
             <i className="topIcon fa-brands fa-pinterest"></i>
             <i className="topIcon fa-brands fa-square-instagram"></i></div>
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
                <img className="topImg" 
                     src="./img/img_girl.jpg/" 
                     alt=""  />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}