import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import AppointmentRatingComment from './AppointmentRatingComment';

function PriceAdd( {onAddPrice} ) {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [image, setImage] = useState("")
    const [comment, setComment] = useState("")

    const userId = useSelector((state) => state.userId) 
    // const serviceArray = useSelector((state) => state.serviceDataIn)
  // const priceArray = useSelector((state) => state.priceDataIn)
  const serviceArray = [
      {"id": 1, 
      "name": "Flat Top", 
      "description": "Flat Top", 
      "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-t..."
    },
      {"id": 2, 
      "name": "Light Taper Fade",
      "description": "Light Taper Fade",
      "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-t..." 
    },
    {"id": 3, 
    "name": "High Fade",
    "description": "High Fade",
    "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-t..." 
    },
    
    {"id": 4, 
    "name": "Short Sides w/ Medium Top", 
    "description": "Short Sides w/ Medium Top", 
    "image": "Hair_Me_Now_Backend/app/images/juliuscaesar-flat-t..." 
    },
    
    {"id": 5, 
    "name": "Short Afro Mohawk", 
    "description": "Short Afro Mohawk", 
    "image": "Hair_Me_Now_Backend/app/images/short-afro-500x500...."
    },  
    
    {"id": 6, 
    "name": "Natural Curly Bob", 
    "description": "Natural Curly Bob", 
    "image": "Hair_Me_Now_Backend/app/images/naturally-curly-bob..." 
    },

    {"id": 7, 
    "name": "Straight Hair", 
    "description": "Straight Hair", 
    "image": "Hair_Me_Now_Backend/app/images/straight-hair-500x6..."
    },
    
    {"id": 8, 
    "name": "Short Purple Balayage", 
    "description": "Short Purple Balayage", 
    "image": "Hair_Me_Now_Backend/app/images/short-purple-balaya..." 
    },
    
    {"id": 9, 
    "name": "Short Weave Bowl Cut", 
    "description": "Short Weave Bowl Cut", 
    "image": "Hair_Me_Now_Backend/app/images/finger-wave-weave-s..." 
    },
    ]

    // const serviceDropDownArray = serviceArray.map(servObj) {
    //     return servObj
    // }

    function handleSubmit(e) {
        e.preventDefault()
        const newPrice = {
            stylist_id: userId,
            service_id: parseInt(name),
            amount: parseFloat(amount),
            image: image,
            comment: comment,
            current: true
        }

        fetch("http://localhost:3000/prices", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.token}`, 
                "Content-Type": "application/json"
            },
            body: JSON.stringyfy(newPrice),
        })
            .then((r) => r.json())
            .then((newPrice) => {
                onAddPrice(newPrice)
            });
    

    }

    return (
        <div className="add-price">
            <section>
                <h3>Add a Price</h3>
                <form className="add-price" onSubmit={handleSubmit} autoComplete="off">
                <select name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
                    <option value="1">Flat Top</option>
                    <option value="2">Light Taper Fade</option>
                    <option value="3">High Fade</option>
                    <option value="4">Short Sides w/ Medium Top</option>
                    <option value="5">Short Afro Mohaw</option>
                    <option value="6">Natural Curly Bob</option>
                    <option value="7">Straight Hai</option>
                    <option value="8">Short Purple Balayage</option>
                    <option value="9">Short Weave Bowl Cut</option>
                </select>
                <input type="text" name="amount" placeholder="Amount" value={amount} id="amount" onChange={(e) => setAmount(e.target.value)}/>
                <input type="text" name="image" placeholder="Image url" value={image} id="image" onChange={(e) => setImage(e.target.value)}/>
                <input type="textarea" name="comment" placeholder="Comment" value={comment} id="comment" onChange={(e) => setComment(e.target.value)}/>
               <button type="submit">Add Price</button>
            </form>
            </section>


        </div>
    )
    

}

export default PriceAdd