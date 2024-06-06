import React from 'react';
import './css/login.css';

function Sign_in() {
  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <form>
      <div className="input-container">
          <label>First name</label>
          <input type="text" name="First_name" required />
        </div>
        <div className="input-container">
          <label>Last name</label>
          <input type="text" name="Last_name" required />
        </div>
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
        <p>Already have an account ?<a href="/login"> Login !</a></p>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
    
  );
}

export default Sign_in;