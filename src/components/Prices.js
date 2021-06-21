import React, { useEffect, useState } from 'react';
import PriceList from "./PriceList";
import PriceAdd from "./PriceAdd";
import { useSelector, useDispatch } from 'react-redux';


function Prices() {
  const [addPrice, setAddPrice] = useState(false)

  const dispatch = useDispatch()


  const stylistId = useSelector((state) => state.stylistId)
  // const priceArray = useSelector((state) => state.priceDataIn)
  const priceArray = [
    {
      "id": 1,
      "amount": 23.99,
      "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-top_large.jpg",
      "url": null,
      "current": true,
      "comment": null,
      "stylist_id": 1,
      "service_id": 1,
      "created_at": "2021-06-20T13:31:13.750Z",
      "updated_at": "2021-06-20T13:31:13.750Z"
    },
    {
      "id": 2,
      "amount": 27.99,
      "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-top_large.jpg",
      "url": null,
      "current": true,
      "comment": null,
      "stylist_id": 1,
      "service_id": 2,
      "created_at": "2021-06-20T13:31:13.755Z",
      "updated_at": "2021-06-20T13:31:13.755Z"
    },
    {
      "id": 3,
      "amount": 30.99,
      "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-top_large.jpg",
      "url": null,
      "current": true,
      "comment": null,
      "stylist_id": 1,
      "service_id": 3,
      "created_at": "2021-06-20T13:31:13.759Z",
      "updated_at": "2021-06-20T13:31:13.759Z"
    },
    {
      "id": 4,
      "amount": 33.99,
      "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-top_large.jpg",
      "url": null,
      "current": true,
      "comment": null,
      "stylist_id": 1,
      "service_id": 4,
      "created_at": "2021-06-20T13:31:13.764Z",
      "updated_at": "2021-06-20T13:31:13.764Z"
    }
  ]

  function handleClick() {
    setAddPrice((addPrice) => !addPrice)
  }

  function handleNewPrice(newPrice) {
    dispatch({type: "priceAdd", payload: newPrice})
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
        {currentPriceCard}
        <div className="button-container">
          <button onClick={handleClick}>Add a Price </button>
        </div>
        {addPrice ? <PriceAdd onAddPrice={handleNewPrice}/> : null}
      </div>
    )
}
export default Prices