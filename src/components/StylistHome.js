import React, { useEffect, useState } from 'react';
import Prices from "./Prices";
import StylistAppointmentManagement from "./StylistAppointmentMgmt";
import FullCalendar, { formDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function StylistHome() {

// access the userId value in the redux store
  const userId = useSelector((state) => state.dataReducer.userId)
  let events = []

  const stylistObj = useState(useSelector((state) => state.stylistReducer.stylistData))
  console.log(stylistObj)

  const stylistId = useSelector((state) => state.stylistReducer.stylistId)
  console.log(stylistId)

  const [currentUser, setCurrentUser] = useState({})

  const params = useParams()
  const dispatch = useDispatch()
 
  
  useEffect(() => {
    console.log(localStorage.token)        
    console.log(userId)
        
    fetch(`http://localhost:3000/users/${params.id}`, {
      method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
    }) 
    .then(res => res.json())
    .then(userInfo => {
        console.log(userInfo)
        setCurrentUser(userInfo)
    })
        
// Done earlier via serializer
    // fetch(`http://localhost:3000/stylist/logged_in/${userId}`, {
    //   headers: {
    //   Authorization: `Bearer ${localStorage.token}`,
    //   },
    // })
    // .then(r => r.json())
    // .then(stylistInfo => {
    //   console.log(stylistInfo)
    //   dispatch({type: "stylistDataIn", payload: stylistInfo})
    //   dispatch({type: "stylist", payload: stylistInfo.id})
    // })

    fetch(`http://localhost:3000/appointments/stylist/${stylistId}`, {
      headers: {
      Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(r => r.json())
    .then(appointmentInfo => {
      console.log(appointmentInfo)
      dispatch({type: "appointmentDataIn", payload: appointmentInfo})
      events = appointmentInfo.filter(function(appointmentObj) {
        let startTime = appointmentObj.time.split("Z")[0]
        return appointmentObj.date === new Date()
      })
      console.log(events)
    })

    fetch(`http://localhost:3000/prices/stylist/${stylistId}`, {
      headers: {
      Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(r => r.json())
    .then(priceInfo => {
      console.log(priceInfo)
      dispatch({type: "priceDataIn", payload: priceInfo})
    })

  }, [])
   
      return (
      <div id="stylist-card" className="main-page">
        
        <p>{stylistObj[0].first_name} {stylistObj[0].last_name}</p>
        <img src={stylistObj[0].image} alt={stylistObj[0].first_name} style={{height: "150px"}} className="stylist-img"/>
        <p>{currentUser.username}</p>
        <FullCalendar 
            initialView='timeGridDay'
            plugins={[dayGridPlugin, timeGridPlugin]}
            events={events}
                    />

          
      </div>
      )

}
export default StylistHome