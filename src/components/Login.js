import CustomerHome from "./CustomerHome";
import StylistHome from "./StylistHome";
import React, { useState } from 'react';
// import SignUp from "./SignUp";
import { NavLink, Link } from "react-router-dom"
import { useDispatch } from 'react-redux'

function Login() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userId, setUserId] = useState()
    const [userType, setUserType] = useState("customer");
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isStylist, setIsStylist] = useState(false)

    const despatch = useDispatch()
    

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(localStorage.token);
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userName,
                password: passWord,
                user_type: userType
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            localStorage.token = userInfo.token
            // setUserId(userInfo.user_id)
            despatch({type: "loggedIn", payload: userInfo.user_id})
            console.log(userInfo.user_id)
            setIsLoggedIn(!isLoggedIn)
            // console.log(isLoggedIn)
            
        })
        if (userType === "stylist") {
            setIsStylist(true)                
        }
        
    }
    return (
        <div >
          <h2>LogIn</h2>
          <form onSubmit={handleSubmit} className="form" autoComplete="off">
              <label>Username</label>
              <input 
                  name="username" 
                  type="text" 
                  value={userName} 
                  onChange={(event) => setUserName(event.target.value)}
                  placeholder="User name..."/>
              <label>Password</label>
              <input 
                  name="password" 
                  type="password"
                  value={passWord} 
                  onChange={(event) => setPassWord(event.target.value)}
                  placeholder="Password..." />
              <label>
                  <input 
                      type="radio" 
                      value="customer"
                      checked={userType === "customer"}
                      onChange={() => setUserType("customer")} /> 
                      Customer
              </label>
              <label>
                  <input 
                      type="radio" 
                      value="stylist"
                      checked={userType === "stylist"}
                      onChange={() => setUserType("stylist")} />
                      Stylist
              </label>
              <button type="submit">Log In</button>
              
          {isLoggedIn ? (isStylist ? <StylistHome/> :
          <CustomerHome/> ) : null }
          </form>
          <div className="signUp-link">
              <nav>
                <NavLink to="/SignUp">Sign Up</NavLink>
              </nav>
          </div>
        </div>
    );
}
export default Login