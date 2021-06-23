import React, { useEffect, useState } from 'react';
import Prices from "./Prices";
import StylistAppointmentManagement from "./StylistAppointmentMgmt";
import FullCalendar, { formDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function StylistHome() {

  const [currentUser, setCurrentUser] = useState({})
  const [stylistObj, setStylistObj] = useState(useSelector((state) => state.stylistReducer.stylistData))

  // console.log(useSelector((state) => state.stylistReducer.stylistData))
  // setStylistObj(useSelector((state) => state.stylistReducer.stylistData))
  console.log(stylistObj)


  let stylistId = useSelector((state) => state.stylistReducer.stylistId)
  console.log(stylistId)

  const params = useParams()

    // access the userId value in the redux store
    const userId = useSelector((state) => state.dataReducer.userId)
    



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
          
        fetch(`http://localhost:3000/appointments/stylist/${stylistId}`, {
           headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then(r => r.json())
        .then(appointmentInfo => {
          console.log(appointmentInfo)
          dispatch({type: "appointmentDataIn", payload: appointmentInfo})
          
 
        })


      }, [])

    
      return (
      <div id="stylist-card" className="main-page">
        
        <p>{stylistObj.first_name} {stylistObj.last_name}</p>
        <img src={stylistObj.image} alt={stylistObj.first_name} style={{height: "150px"}} className="stylist-img"/>
        <p>{currentUser.username}</p>
        <FullCalendar 
            initialView='timeGridDay'
            plugins={[dayGridPlugin, timeGridPlugin]}
            events={[{title: "test", date: '2021-06-22', start: '17:00:00'},
                    ]}
                    />

          
      </div>
      )

}
export default StylistHome