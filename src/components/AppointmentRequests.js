import React, { useEffect, useState } from 'react';


function AppointmentRequests({name, date, time, style}) {
    
    return (
        <div className="apppointment-requests">  
            <h2> Appointment Requests </h2>
            <p>name date time style</p>
            <p>{name} {date} {time} {style}</p>
        
        </div>
    )
}
export default AppointmentRequests