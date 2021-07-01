import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CustomerProfile() {

    const dispatch = useDispatch()
    
    let stylistData = useSelector((state) => state.stylistReducer.stylistData)
    console.log(stylistData)

    const [firstName, setfirstName] = useState(stylistData.first_name)
    const [lastName, setlastName] = useState(stylistData.last_name)
    const [address1, setaddress1] = useState(stylistData.address_1)
    const [address2, setaddress2] = useState(stylistData.address2)
    const [city, setCity] = useState(stylistData.city)
    const [state, setState] = useState(stylistData.state)
    const [zipCode, setZipCode] = useState(stylistData.zip_code)
    const [url, setUrl] = useState(stylistData.url)
    const [image, setImage] = useState(stylistData.image)
    const [email, setEmail] = useState(stylistData.email)
    const [genderService, setGenderService] = useState(stylistData.gender_service)
    const [ethnicityService, setEthnicityService] = useState(stylistData.ethnicity_service)
    const [phoneNum, setPhoneNum] = useState(stylistData.phone_num)
    
//     setfirstName(stylistData.first_name)
//     setlastName(stylistData.last_name)
//     setaddress1(stylistData.address_1)
//     setaddress2(stylistData.address2)
//     setCity(stylistData.city)
//     setState(stylistData.state)
//     setImage(stylistData.image)
//     setUrl(stylistData.url)
//     setPhoneNum(stylistData.phone_num)
//     setEmail(stylistData.email)
//     setZipCode(stylistData.zip_code)
//     setGenderService(stylistData.gender_service)
//     setEthnicityService(stylistData.ethnicity_service)
    

    function handleSubmit(e) {
        e.preventDefault()

        const stylistUpdate = {
                stylist_id: stylistData.id,
                first_name: firstName,
                last_name: lastName,
                address_1: address1,
                address_2: address2,
                city: city,
                state: state,
                zip_code: zipCode,
                url: url,
                image: image,
                email: email,
                phone_num: phoneNum,
                gender_service: genderService,
                ethnicity_service: ethnicityService
        }

        fetch(`http://localhost:3000/stylists/${stylistData.id}`, {
                method: "PATCH",
                headers: {
                        Authorization: `Bearer ${localStorage.token}`, 
                        "Content-Type": "application/json"  
                },
                body: JSON.stringify(stylistUpdate),
        })
                .then(r => r.json())
                .then((stylistUpdated) => {
                        dispatch({type: "stylistDataIn", payload: stylistUpdated})
                })
    }
    
    return (
        <section>
            <form onSubmit={handleSubmit} className="form" autoComplete="off">
            <h3>Profile</h3>
            <h3>{stylistData.first_name} {stylistData.last_name}</h3>
            <img src={stylistData.image} alt={stylistData.first_name} style={{height: "150px"}} className="stylist-img"/>
            
            <label htmlFor="firstname">First Name</label>
            <input type="text"
                    id="firstname"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    placeholder={stylistData.first_name}
            />
            <label htmlFor="lastname">Last Name</label>
            <input type="text"
                    id="lastname"
                    name="lastname"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    placeholder={stylistData.last_name}
            />
            <br/>
            <label htmlFor="address1">Address 1</label>
            <input type="text"
                    id="address1"
                    name="address1"
                    value={address1}
                    onChange={(e) => setaddress1(e.target.value)}
                    placeholder={stylistData.address_1}
            />
            <label htmlFor="addess2">Address 2</label>
            <input type="text"
                    id="address2"
                    name="address2"
                    value={address2}
                    onChange={(e) => setaddress2(e.target.value)}
                    placeholder={stylistData.address_2}
            />
            <label htmlFor="city">City</label>
            <input type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={stylistData.city}
            />
            <label htmlFor="state">State</label>
            <input type="text"
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder={stylistData.state}
            />
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text"
                    id="zipcode"
                    name="zipcode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder={stylistData.zip_code}
            />
            <label htmlFor="phonenum">Phone Number</label>
            <input type="text"
                    id="phonenum"
                    name="phonenum"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    placeholder={stylistData.phone_num}
            />
            <label htmlFor="email">Email</label>
            <input type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={stylistData.email}
            />
            <label htmlFor="state">url</label>
            <input type="text"
                    id="url"
                    name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={stylistData.url}
            />
            <label htmlFor="state">Image</label>
            <input type="text"
                    id="image"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder={stylistData.image}
            />
            <label htmlFor="gender">Gender Serviced</label>
            <input type="text"
                    id="gender"
                    name="gender"
                    value={genderService}
                    onChange={(e) => setGenderService(e.target.value)}
                    placeholder={stylistData.gender_serviced}
            />
            <label htmlFor="ethnicity">Ethnicity Serviced</label>
            <input type="text"
                    id="ethnicity"
                    name="ethnicity"
                    value={ethnicityService}
                    onChange={(e) => setEthnicityService(e.target.value)}
                    placeholder={stylistData.ethnicity_serviced}
            />

            <button type="submit">Update Profile</button>
            
            </form>
        </section>
        
    )

}

export default CustomerProfile