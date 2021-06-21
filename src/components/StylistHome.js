import React, { useEffect, useState } from 'react';
import Prices from "./Prices";
import StylistAppointmentManagement from "./StylistAppointmentMgmt";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function StylistHome() {

  const [stylistLoggedIn, setStylistLoggedIn] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const params = useParams()

    // access the userId value in the redux store
    const userId = useSelector((state) => state.userId)
    // const stylistObj = useSelector((state) => state.stylistDataIn)
    const stylistObj = {"id": 1, "first_name": "Hess", "last_name": "Hess", "address_1": "95 Fisher Ave", "address_2": null, "city": "White Plains", "zip_code": "99999", "gender_service": "male", "ethnicity_service": "all", "image": null, "phone_num": "(555) 999-9999", "email": null}
    console.log(stylistObj)



    const dispatch = useDispatch()

    useEffect(() => {
        console.log(localStorage.token)
        console.log(userId)
        // fetch(`http://localhost:3000/stylist/logged_in/${userId}`, {
        //         method: "GET",
        //         headers: {
        //             Authorization: `Bearer ${localStorage.token}`
        //         }
        // })
        // .then(resp => resp.json())
        // .then(stylist => { 
        //     // setAppointmentsArray(stylist[0].appointments)
        //     setStylistLoggedIn(stylist)
        //     console.log(stylist)
        //     dispatch({type: "stylistId", payload: stylist[0].id})
        //     setIsLoaded(true)
        //     // console.log(appointmentsArray)
        // })
        fetch(`http://localhost:3000/users/${params.id}`, {
          method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }}) 
        // method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         username: userName,
        //         password: passWord,
        //         user_type: userType
        //     })
        // })
        .then(res => res.json())
        .then(userInfo => {
          console.log(userInfo)
          setCurrentUser(userInfo)
        })
      }, [])

      return (
      <div className="stylist-card">
        
        <p>{stylistObj.first_name} {stylistObj.last_name}</p>
        <img src={stylistObj.image} alt={stylistObj.first_name} style={{height: "150px"}} className="stylist-img"/>
        <p>{currentUser.username}</p>

          {/* <StylistAppointmentManagement /> */}
          {/* <Prices/> */}
      </div>
      )

}
export default StylistHome