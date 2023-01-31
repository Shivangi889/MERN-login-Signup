import React, { useState } from "react";
import axios from 'axios-react';
import {useNavigate , Link} from "react-router-dom";

  export const Login = ({ setLoginUser}) => {
    
    const history = useNavigate();
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
 

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input value={user.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} id="password" placeholder="Enter your Password" ></input>

                <button type="submit" onClick={login}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => history.push("/register")}>Don't have an account?</button>

<Link to="/Register">Register here</Link>

        </div>



    )
}
// export default Login;