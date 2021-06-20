import React, { useEffect } from 'react';
import PriceList from "./PriceList";
import { useSelector } from 'react-redux';


function Prices() {

  const stylistId = useSelector((state) => state.stylistId)

    useEffect(() => {
        fetch(`http://localhost:3000/prices/stylist/:${stylistId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(res => res.json())
        .then(prices => { 
          console.log(prices)
        })
      }, [])
    
    return <div>
        <PriceList/>
    </div>
}
export default Prices