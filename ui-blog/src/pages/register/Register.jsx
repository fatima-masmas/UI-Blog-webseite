import "./register.css"

export default function Register() {
  return (
    <div className="register">
         <span className="registerTitle">Register</span>
        <from className="registerForm">
            <label >E-mail</label>
            <input type="text" className="registerInput" placeholder="Enter your Email..." />
            <label >Passwort</label>
            <input type="passwort" className="registerInput" placeholder="Enter your Passwort..." />
            <button className="registerButton">Register</button>
            <button className="registerLoginButton">Log In</button>
        </from>
      
    </div>
  )
}
