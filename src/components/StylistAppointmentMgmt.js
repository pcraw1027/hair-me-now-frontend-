import React, { useEffect, useState } from 'react';
import AppointmentCalendar from "./AppointmentCalendar";
import AppointmentRequests from "./AppointmentRequests";
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';


function StylistAppointmentManagement() {
  const [appointments, setAppointments] = useState({})
  const [appointmentsArray, setAppointmentsArray] = useState([]);
  const [stylistLoggedIn, setStylistLoggedIn] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  // access the userId value in the redux store
  const userId = useSelector((state) => state.userId)
  const despatch = useDispatch()

  useEffect(() => {
    console.log(localStorage.token)
    console.log(userId)
    fetch(`http://localhost:3000/stylist/logged_in/${userId}?_embed=appointments`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
    })
    .then(resp => resp.json())
    .then(stylist => { 
        setAppointmentsArray(stylist[0].appointments)
        setStylistLoggedIn(stylist)
        despatch({type: "stylistId", payload: stylist[0].id})
        setIsLoaded(true)
        console.log(stylist)
        console.log(appointmentsArray)
    })
  }, [])

  // useEffect(() =>  {
  //   fetch(`http://localhost:3000/appointments/stylist/${stylistLoggedIn.id}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(appointments => { 
  //     console.log(appointments)
  //     setAppointmentsArray(appointments)
  //     setIsLoaded(false)
  //   })
  // }, [stylistLoggedIn])  
  
  let confirmedAppointmentsArray
  let requestedAppointmentsArray
  let showrequestedAppointmentsArray
  
  if (isLoaded) {
    console.log(appointmentsArray)
    // find the current appointments and not completed
      const currentAppointmentsArray = appointmentsArray.filter(function(appointmentObj) {
        // return appointmentObj.date > moment().format("YYYY/MM/DD")
        return appointmentObj.completed === false
        // return appointmentObj.date > moment().format("YYYY/MM/DD") && appointmentObj.completed == false
      })

    // find the current appointments that are not confirmed 
      requestedAppointmentsArray = currentAppointmentsArray.filter(function(reqAppointmentObj){
        return reqAppointmentObj.confirmed === false
      })

    // find the current appointments that are confirmed
      confirmedAppointmentsArray = currentAppointmentsArray.filter(function(confAppointmentObj){
        return confAppointmentObj.confirmed === true
      })

      console.log(currentAppointmentsArray)
      console.log(requestedAppointmentsArray)
      console.log(confirmedAppointmentsArray)

      // showrequestedAppointmentsArray = requestedAppointmentsArray.map(function(request) {
      //     return <AppointmentRequests 
      //       key={request.id}
      //       name={request.appointment_customer}
      //       date={request.date}
      //       time={request.time}
      //       style={request.appointment_style}
      //     />
      // })


    
  } else {
    null
  }

  if (isLoaded) {

    // showrequestedAppointmentsArray = requestedAppointmentsArray.map(function(request) {
    //   return <AppointmentRequests 
    //     key={request.id}
    //     name={request.appointment_customer}
    //     date={request.date}
    //     time={request.time}
    //     style={request.appointment_style}
    //   />
    // })
    
    return 
      <div>
        
        <AppointmentCalendar confirmedAppointmentsArray={confirmedAppointmentsArray}/>
      </div>
  }
}
export default StylistAppointmentManagement