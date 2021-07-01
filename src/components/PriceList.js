import React from 'react';
import StylesManagement from "./StylesManagement";
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

function PriceList({id, image, amount, comment, handleDeletePrice, name}) {
    
    function handleClick(){
        
    }
    
    
    return (
        <Card style={{width: '18rem'}}>
            <Card.Title>{name}</Card.Title>
            <Card.Body>
                <Card.Img src={image} alt={id} style={{height: "150px"}} className="price-img" />
                <Card.Text>${amount}</Card.Text>
                <Card.Text>{comment}</Card.Text>
            </Card.Body>
            <Button onClick={() => handleDeletePrice(id)}>Delete</Button>
        </Card>
        // <div className="price-card">
        //     <h3>{name}</h3>
        //     <img src={image} alt={id} style={{height: "150px"}} className="price-img" />
        //     <p>${amount}</p>
        //     <p>{comment}</p>
        //     <button onClick={() => handleDeletePrice(id)}>Delete</button>
        //     {/* <StylesManagement/> */}
        // </div>
    )
}
export default PriceList