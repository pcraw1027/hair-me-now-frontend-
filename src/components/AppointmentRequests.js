import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { Card, Button } from 'react-bootstrap'


function AppointmentRequests({id, name, date, time, style, onAccept, onReject, image}) {
    
    function handleAccept(request_id) {
        onAccept(request_id)
    }

    function handleReject(request_id) {
        onReject(request_id)
    }



    return (
        <div>
            <Card style={{width: '18rem' }}>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Appointment Request</Card.Subtitle>
                <Card.Body>
                    <Card.Text>{moment({time}).format("MMM Do YY")}</Card.Text>
                    <Card.Img src={image} alt={name} style={{height: "150px"}} />
                    <Card.Text>{style}</Card.Text>
                    <Card.Text>{moment({time}).format("LT")}</Card.Text>
                    <Button className="accept-btn" onClick={() => handleAccept(id)}>Accept</Button>
                    <Button className="reject-btn" onClick={() => handleReject(id)}>Reject</Button>
                </Card.Body>
            </Card>
            
        </div>
        // <div className="apppointment-requests">  
        //     <h5> Appointment Request </h5>
        //     <li>{name}</li>
        //     <li>{moment({time}).format("MMM Do YY")} </li>
        //     <img src={image} alt={name} style={{height: "150px"}} className="stylist-img"/>
        //     <li>{style} </li>
        //     <li>{moment({time}).format("LT")} </li>
        //     <button className="accept-btn" onClick={() => handleAccept(id)}>Accept</button>
        //     <button className="reject-btn" onClick={() => handleReject(id)}>Reject</button>
        
        // </div>
    )
}
export default AppointmentRequests