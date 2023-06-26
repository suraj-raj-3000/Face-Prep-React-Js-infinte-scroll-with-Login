import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import '../App/useToken'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import useToken from './components/App/useToken';
import { useNavigate } from "react-router-dom";


import '../../App.css'


// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

export default function SignInPage() {

    // let isLoggedIn = true;
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username : '',
        password : ''
    });
    // const [errors, setError] = useState()
 

function handleChange(e) {
    console.log(e.target.value)
    setValues({...values, [e.target.name]: e.target.value})
}

function handleSubmit(e){
    e.preventDefault();

    // setError(Validation(values));
    // const token = await loginUser({
    //   username,
    //   password
    // });
    // setToken(token);
    if((values.username === "foo" && values.password === "bar")){
        console.log(values.username);
        navigate("/home");
        }else{

        alert("Please enter Valid Credentials!");
        
    }

}

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form  onSubmit={handleSubmit}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text"  onChange={handleChange} name="username" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password"  onChange={handleChange} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
// SignInPage.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }
