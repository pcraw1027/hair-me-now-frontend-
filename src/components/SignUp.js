import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function SignUp() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userType, setUserType] = useState("customer");
    
    const history = useHistory();

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
            console.log(userInfo)
            setUserName("")
            setPassWord("")
            if (userType === "stylist") {
                fetch("http://localhost:3000/stylists", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_id: userInfo.id,
                        first_name: "firstName",
                        last_name: "lastName",
                        address_1: "address1",
                        address_2: "address2",
                        city: "city",
                        state: "state",
                        zip_code: "zipCode",
                        url: "url",
                        image: "image",
                        email: "email",
                        phone_num: "phoneNum",
                        gender_service: "genderService",
                        ethnicity_service: "ethnicityService"
                    }),
                })
                .then(r => r.json())
                .then((dummyStylist) => {
                    console.log(dummyStylist)
                })
            } else {
                console.log("customer")
            }

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