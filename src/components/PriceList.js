import React from 'react';
import StylesManagement from "./StylesManagement";
import { useDispatch } from 'react-redux';

function PriceList({id, image, amount, comment }) {
    
    function handleClick(){
        fetch(`http://localhost:3000/prices/${id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                current: false
                
            })
            .then((r) => r.json())
            .then(updatedPrice => {
                // despatch({type: "", payload: updatedPrice)
            })
        })

    }
    
    
    return (
        <div className="price-card">
            <h3>{id}</h3>
            <img src={image} alt={id} style={{height: "150px"}} className="price-img" />
            <p>${amount}</p>
            <p>{comment}</p>
            <button onClick={handleClick}>Delete</button>
            {/* <StylesManagement/> */}
        </div>
    )
}
export default PriceList