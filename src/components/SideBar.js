import React, {useState, useEffect} from "react"
import { NavLink, Link, useHistory } from "react-router-dom"
import Search from './Search';
import { useSelector } from 'react-redux'

function SideBar() {

    const [stylistsArray, setStylistsArray] = useState([]);
    const [isStylist, setIsStylist] = useState(true)
    const userType = useSelector((state) => state.userType) 
    
    console.log(isStylist)

    if (userType == "sytlist") {
        setIsStylist(true)
        console.log(isStylist)
    }
    
    const history = useHistory()
    
    useEffect(() => {
        // fetch("http://localhost:3000/stylists", {
        //     method: "GET",
        //     headers: {
        //         Authorization: `Bearer ${localStorage.token}`
        //     }
        // })
        // .then(resp => resp.json())
        // .then(stylists => {
        //     console.log(stylists) 
        //     setStylistsArray(stylists)
        // })
        console.log(isStylist)
    }, [useSelector((state) => state.userType)])
    function logOut() {
        localStorage.clear()
        history.push(`/`)
      }

    return ( 
        <div className="sidebar" id="side-bar-sticky">
            <Link to="/">
                <img src="https://i.imgur.com/5X4flB9.png" style={{ width :225}} alt= "logo" />
            </Link>
            <Search stylistsArray={stylistsArray} />
            <div className="mgmt-links">
                <nav>
                    {isStylist ?
                    <NavLink className="sidebar-btn" to="/stylistappointmentmgmt">Appointment Managment</NavLink> : 
                    <NavLink className="sidebar-btn" to="/customermakeappointment">Appointment Managment</NavLink>}
                    <br/>
                    {isStylist ?
                    <NavLink className="sidebar-btn" to="/prices">Price Management</NavLink> : 
                    <NavLink className="sidebar-btn" to="/customerprofile">User Profile Management</NavLink>}
                    <br/>
                    {isStylist ?
                    <NavLink className="sidebar-btn" to="/stylistprofile">User Profile Management</NavLink> : null}
                    <br/>
                    {isStylist ?
                    <NavLink className="sidebar-btn" to="/productpurchasemgmt">Purchase Management</NavLink> : null}
                </nav>
            </div>
            <button onClick={logOut}>Log Out</button>
            
        
        </div>
    )
}
export default SideBar