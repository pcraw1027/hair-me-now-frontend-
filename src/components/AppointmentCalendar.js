import AppointmentCard from "./AppointmentCard";
// import Calendar from 'react-calendar';
import FullCalendar, { formDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { useState } from 'react'


function AppointmentCalendar({confirmedAppointmentsArray}) {
    
    // const [value, onChange] = useState(new Date())
    console.log(confirmedAppointmentsArray)
    
    let events = []

    events = confirmedAppointmentsArray.map((appointments) => {
        const startTime = appointments.time.split("Z")[0]
        return {
            id: appointments.id,
            title: appointments.appointment_customer,
            start: startTime
        }
    })

    function handleDateClick() {
        return "hello"
    }
    
    return <div>
        <FullCalendar 
            initialView='dayGridMonth'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
            dateClick={handleDateClick}
                    />
        {/* <AppointmentCard/> */}
    </div>
}
export default AppointmentCalendar