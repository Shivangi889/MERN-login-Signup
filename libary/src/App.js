import React, { useState } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [logIn, setLogIn] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const [Loginuser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  function register() {}
  function login() {}

  return (
    <div className="App">
      {logIn ? (
        <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form">
            <label htmlFor="email">email</label>
            <input
              value={Loginuser.email}
              onChange={handleChange}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              value={Loginuser.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter your Password"
            ></input>

            <button type="submit" onClick={login}>
              Log In
            </button>
          </form>
          <button className="link-btn" onClick={() => setLogIn(!logIn)}>
            Don't have an account?
          </button>

          <button to="/Register">Register here</button>
        </div>
      ) : (
        <div className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form">
            <label htmlFor="name">Full name</label>

            <input
              type="text"
              value={user.name}
              name="name"
              onChange={handleChange}
              id="name"
              placeholder="full Name"
            />
            <label htmlFor="email">email</label>
            <input
              value={user.email}
              onChange={handleChange}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              value={user.pass}
              onChange={handleChange}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <button type=" submit" onClick={register}>
              Log In
            </button>
          </form>

          <button className="link-btn" onClick={() => setLogIn(!logIn)}>
            Already have an account? Login here.
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
