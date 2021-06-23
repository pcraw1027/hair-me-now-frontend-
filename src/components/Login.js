import CustomerHome from "./CustomerHome";
import StylistHome from "./StylistHome";
import React, { useState } from 'react';
// import SignUp from "./SignUp";
import { NavLink, Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'


function Login() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userId, setUserId] = useState();
    const [userType, setUserType] = useState("customer");
    const [isStylist, setIsStylist] = useState("true")
    
    const history = useHistory()

    const dispatch = useDispatch()
    

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
            // Setup login token capture for the session
            localStorage.token = userInfo.token
            // Capture user id for the session in Redux
            dispatch({type: "loggedIn", payload: userInfo.user_id})
            
            console.log(userInfo)
            console.log(userInfo.user_prices)
            console.log(userInfo.user_appointments)
            // console.log(userInfo.user_stylist)

            if (userType === "stylist") {
                dispatch({type: "stylistDataIn", payload: userInfo.user_stylist})


                // Load stylist user prices
                dispatch({type: "priceDataIn", payload: userInfo.user_prices})
                
                // Load stylist user appointments
                // dispatch({type: "appointmentDataIn", payload: userInfo.user_appointments})

                // Currently this data is not in the Login fetch 
                // but is avalible in the Users fetch so we'll move it back
                // to the StylistHome component.  So commented out
                // dispatch({type: "stylistDataIn", payload: userInfo.stylist})

                // Actually will make it a capture of the stylistId instead
                dispatch({type: "stylist", payload: userInfo.user_stylist.id})

                // fetch(`http://localhost:3000/stylists/${userInfo.user_stylist.id}`, {
                // method: "GET",
                // headers: {
                //     Authorization: `Bearer ${localStorage.token}`
                // }
                // })
                // .then(resp => resp.json())
                // .then(stylists => {
                //     console.log(stylists) 
    
                //     dispatch({type: "stylistDataIn", payload: stylists})

                // })
            } else {
                console.log(userInfo)
            }

            dispatch({type: "userType", payload: userInfo.user_type})

            if (userType === "stylist") {
                history.push(`/stylisthome/${userInfo.user_id}`)
            } else {
                history.push(`/customerhome/${userInfo.user_id}`)
            }
            
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
              
          {/* {isLoggedIn ? (isStylist ? <StylistHome/> :
          <CustomerHome/> ) : null } */}
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