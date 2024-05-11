import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form>
          <h2>User Login</h2>
          <div className="form-input-box">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username or email"
            />
          </div>
          <div className="form-input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <span>Already have an account?</span>
          <input type="checkbox"></input>  Remember 
          <button className="form-btn">Submit</button>
          <div className="form-footer">
            <p>Don't have an account?</p>
            <Link to="/singup">Create One</Link>
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src="./images/login-animate.svg" alt="amico"/>
      </div>
    </div>
  );
};

export default Login;
