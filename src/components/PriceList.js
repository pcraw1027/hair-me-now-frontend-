import React from 'react';
import StylesManagement from "./StylesManagement";
import { useDispatch } from 'react-redux';

function PriceList({id, image, amount, comment, handleDeletePrice}) {
    
    function handleClick(){
        
    }
    
    
    return (
        <div className="price-card">
            <h3>{id}</h3>
            <img src={image} alt={id} style={{height: "150px"}} className="price-img" />
            <p>${amount}</p>
            <p>{comment}</p>
            <button onClick={() => handleDeletePrice(id)}>Delete</button>
            {/* <StylesManagement/> */}
        </div>
    )
}
export default PriceList