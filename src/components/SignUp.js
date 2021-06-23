import React, { useState, useHistory } from 'react';

function SignUp() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userType, setUserType] = useState("customer");
    
    const history = useHistory()

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3000/users", {
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
            setUserName("")
            setPassWord("")
            history.push('/login')
        })
    }
  
    return (
      <div >
        <h2>SignUp</h2>
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
            <button type="submit">Sign Up</button>
            
        </form>
        
      </div>
    );
  }
  
  export default SignUp;