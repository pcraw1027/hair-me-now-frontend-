import React, { useEffect, useState } from 'react';
import AppointmentCalendar from "./AppointmentCalendar";
import AppointmentRequests from "./AppointmentRequests";
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';


function StylistAppointmentManagement() {
  const [appointments, setAppointments] = useState({})
  // const [appointmentsArray, setAppointmentsArray] = useState([]);
  const [stylistLoggedIn, setStylistLoggedIn] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  // access the userId value in the redux store
  const userId = useSelector((state) => state.dataReducer.userId)
  const dispatch = useDispatch()

  // useEffect(() => {
    console.log(localStorage.token)
    console.log(userId)
  //   fetch(`http://localhost:3000/stylist/logged_in/${userId}?_embed=appointments`, {
  //           method: "GET",
  //           headers: {
  //               Authorization: `Bearer ${localStorage.token}`
  //           }
  //   })
  //   .then(resp => resp.json())
  //   .then(stylist => { 
  //       setAppointmentsArray(stylist[0].appointments)
  //       setStylistLoggedIn(stylist)
  //       dispatch({type: "stylistId", payload: stylist[0].id})
  //       setIsLoaded(true)
  //       console.log(stylist)
  //       console.log(appointmentsArray)
  //   })
  // }, [])

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
  
  
  const appointmentsArray = useSelector((state) => state.appointmentReducer.appointmentData)
console.log(appointmentsArray)
//   
function handleAccept(acceptId) {
  fetch(`http://localhost:3000/appointments/${acceptId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      confirmed: true
    })
  })
  .then(r => r.json())
  .then(json => {
    const changeAppointmentsArray = appointmentsArray.map(appointment => {
      return appointment.id === acceptId ? json : appointment
    })
    dispatch({type: "appointmentConfirm", payload: changeAppointmentsArray}) 
  })
}
  

function handleReject(rejectId) {
  fetch(`http://localhost:3000/appointments/${rejectId}`, {
    method: "DELETE",
    headers: {
        Authorization: `Bearer ${localStorage.token}`
    },
  })
  .then(r => r.json())
  .then(json => {
    console.log(`Deletion of ${rejectId} successful!!!`)

    const newAppointmentsArray = appointmentsArray.filter(appointment => {
      return appointment.id !== rejectId
    })
    dispatch({type: "appointmentDelete", payload: newAppointmentsArray})
  })
}
  
  
  
  
  let confirmedAppointmentsArray
  let requestedAppointmentsArray
  let showRequestedAppointmentsArray
  let showConfirmedAppointmentsArray
  
  // if (isLoaded) {
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

      showRequestedAppointmentsArray = requestedAppointmentsArray.map(function(request) {
          return <AppointmentRequests 
            key={request.id}
            id={request.id}
            name={request.appointment_customer}
            date={request.date}
            time={request.time}
            style={request.appointment_style}
            image={request.price.image}
            onAccept={handleAccept}
            onReject={handleReject}
          />
      })

      // showConfirmedAppointmentsArray = confirmedAppointmentsArray.map(function(confirmed) {
      //   return <AppointmentCalendar
      //     key={confirmed.id}
      //       name={confirmed.appointment_customer}
      //       date={confirmed.date}
      //       time={confirmed.time}
      //       style={confirmed.appointment_style}
      //       />
      // })


    
  // } else {
    // null
  // }

  // if (isLoaded) {
    
    return (
      <div>
        <ul className="appointment-list">
          {showRequestedAppointmentsArray}
        </ul>
        {/* {showConfirmedAppointmentsArray} */}
        <AppointmentCalendar confirmedAppointmentsArray={confirmedAppointmentsArray}/>
      </div>
    )
  // }
}
export default StylistAppointmentManagement