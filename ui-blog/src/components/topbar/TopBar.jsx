import React from "react";
import "./topbar.css";
export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft"> 
             <i className="topIcon fa-brands fa-facebook"></i>
             <i className="topIcon fa-brands fa-twitter"></i>
             <i className="topIcon fa-brands fa-pinterest"></i>
             <i className="topIcon fa-brands fa-square-instagram"></i></div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <link classNmae="link" to="/">HOME</link>
                    </li>
                    <li className="topListItem"><link classNmae="link" to="/">ABOUT</link></li>
                    <li className="topListItem"><link classNmae="link" to="/">CONTACT</link></li>
                    <li className="topListItem"><link classNmae="link" to="/write">WRITE</link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                    
                </ul>
            </div>
            <div className="topRight">
                { 
                user ? (<img className="topImg" 
                     src="https://picsum.photos/75/700" 
                     alt=""  />) : (
                         <ul classname="topList">
                            <li className="topListItem">
                        <link classNmae="link" to="/login">LOGIN</link>
                        </li>
                        <li className="topListItem">
                        <link classNmae="link" to="/register">REGISTTER</link>
                        </li></ul>)}
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}