import React, { useEffect, useState } from 'react';


function AppointmentRequests({id, name, date, time, style, onAccept, onReject}) {
    
    function handleAccept(request_id) {
        onAccept(request_id)
    }

    function handleReject(request_id) {
        onReject(request_id)
    }



    return (
        <div className="apppointment-requests">  
            <h3> Appointment Requests </h3>
            <p>Customer Name {name}</p>
            <p>Appointment Date  {date} </p>
            <p>Requested Style {style} </p>
            <p>Start Time {time} </p>
            <p>End Time {time} </p>
            <button className="accept-btn" onClick={() => handleAccept(id)}>Accepct</button>
            <button className="reject-btn" onClick={() => handleReject(id)}>Reject</button>
        
        </div>
    )
}
export default AppointmentRequests