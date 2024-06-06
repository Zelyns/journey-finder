import React from 'react';
import './css/login.css';

function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
      <div className="links">
        <p>Don’t have an account? <a href="/Sign_in">Sign up!</a></p>
        <a href="/forgot-password">I forgot my password</a>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
    
  );
}

export default Login;
