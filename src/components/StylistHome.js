import React, { useEffect, useState } from 'react';
import Prices from "./Prices";
import StylistAppointmentManagement from "./StylistAppointmentMgmt";
import { useSelector, useDispatch } from 'react-redux';


function StylistHome() {

  const [stylistLoggedIn, setStylistLoggedIn] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

    // access the userId value in the redux store
    const userId = useSelector((state) => state.userId)
    const despatch = useDispatch()

    useEffect(() => {
        console.log(localStorage.token)
        console.log(userId)
        fetch(`http://localhost:3000/stylist/logged_in/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
        })
        .then(resp => resp.json())
        .then(stylist => { 
            // setAppointmentsArray(stylist[0].appointments)
            setStylistLoggedIn(stylist)
            console.log(stylist)
            despatch({type: "stylistId", payload: stylist[0].id})
            setIsLoaded(true)
            // console.log(appointmentsArray)
        })
      }, [])

      return <div>
          {/* <StylistAppointmentManagement /> */}
          <Prices/>
      </div>

}
export default StylistHome