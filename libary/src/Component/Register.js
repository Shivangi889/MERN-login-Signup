import React, { useState } from "react";
import axios from 'axios-react';

import { useNavigate } from "react-router-dom";



export const Register = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form">
            <label htmlFor="name">Full name</label>

            <input  type="text" value={user.name} name="name" onChange={handleChange} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input  value={user.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input  value={user.pass} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
            <button type =" submit" onClick={register} >Log In</button>

        </form>


        <button className="link-btn" onClick={() => history.push('login')}>Already have an account? Login here.</button>
    </div>
    )
}
