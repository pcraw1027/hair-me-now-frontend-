import React, { useEffect, useState } from 'react';
import PriceList from "./PriceList";
import PriceAdd from "./PriceAdd";
import { useSelector, useDispatch } from 'react-redux';
import {CardGroup} from 'react-bootstrap'

function Prices() {
  const [addPrice, setAddPrice] = useState(false)

  const dispatch = useDispatch()


  const stylistId = useSelector((state) => state.stylistId)
  // const priceArray = useSelector((state) => state.priceDataIn)
  const priceArray = useSelector((state => state.priceReducer.priceData))
  


  function handleClick() {
    setAddPrice((addPrice) => !addPrice)
  }

  function handleNewPrice(newPrice) {
    dispatch({type: "priceAdd", payload: newPrice})
  }

  function handleDeletePrice(priceId) {

    fetch(`http://localhost:3000/prices/${priceId}`, {
      method: "PATCH",
      headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
              current: false
              
          })
      })
          .then((r) => r.json())
          .then(json => {

              const changePriceArray = priceArray.map(price => {
                  return price.id === priceId ? json : price
                })
                dispatch({type: "priceDeactive", payload: changePriceArray}) 
      
      })


  }
  
  

  const currentPriceArray = priceArray.filter(function(priceObj) {
    return priceObj.current
  })

  const currentPriceCard = currentPriceArray.map(function(priceObj) {
    return <PriceList 
            key = {priceObj.id}
            id = {priceObj.id}
            image = {priceObj.image}
            amount = {priceObj.amount}
            comment = {priceObj.comment}
            name = {priceObj.price_style}
            handleDeletePrice = {handleDeletePrice}
        />
  })

    // useEffect(() => {
    //     fetch(`http://localhost:3000/prices/stylist/${stylistId}`, {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${localStorage.token}`
    //       }
    //     })
    //     .then(res => res.json())
    //     .then(prices => { 
    //       console.log(prices)
    //     })
    //   }, [])
    
    return (
      <div className="price-list" id="prices">
        <h1>Price List</h1>
        <CardGroup>{currentPriceCard}</CardGroup>
        <div className="button-container">
          <button onClick={handleClick}>Add a Price </button>
        </div>
        {addPrice ? <PriceAdd onAddPrice={handleNewPrice}/> : null}
      </div>
    )
}
export default Prices