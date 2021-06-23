import React, {useState, useEffect} from "react"
import { NavLink, Link, useHistory } from "react-router-dom"
import Search from './Search';

function SideBar() {

    const [stylistsArray, setStylistsArray] = useState([]);
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
    }, [])
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
                    {localStorage.token ?
                    <NavLink className="sidebar-btn" to="/stylistappointmentmgmt">Appointment Managment</NavLink> : null}
                    <br/>
                    {localStorage.token ?
                    <NavLink className="sidebar-btn" to="/prices">Price Management</NavLink> : null}
                    <br/>
                    {localStorage.token ?
                    <NavLink className="sidebar-btn" to="/stylistprofile">User Profile Management</NavLink> : null}
                    <br/>
                    {localStorage.token ?
                    <NavLink className="sidebar-btn" to="/productpurchasemgmt">Purchase Management</NavLink> : null}
                </nav>
            </div>
            <button onClick={logOut}>Log Out</button>
            
        
        </div>
    )
}
export default SideBar