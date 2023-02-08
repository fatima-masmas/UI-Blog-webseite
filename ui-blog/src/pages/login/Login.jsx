import React from "react";
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Log In</span>
        <from className="loginForm">
            <label >E-mail</label>
            <input type="text" className="loginInput" placeholder="Enter your Email..." />
            <label >Passwort</label>
            <input type="passwort" className="loginInput" placeholder="Enter your Passwort..." />
            <button className="loginButton">Log In</button>
           </from>
         <button className="loginRegisterButton">
          <link className="link" to="/register">Register</link>
         </button>
        
      
    </div>
  );
}
