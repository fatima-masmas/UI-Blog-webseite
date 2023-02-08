import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <from className="loginForm">
            <label >E-mail</label>
            <input type="text" placeholder="Enter your Email..." />
            <label >Passwort</label>
            <input type="passwort" placeholder="Enter your Passwort..." />
            <button className="loginButton">Log In</button>
            <button className="loginRegisterButton">Register</button>
        </from>
      
    </div>
  )
}
