import React, {useState, useEffect} from "react"
import { NavLink, Link } from "react-router-dom"
import Search from './Search';

function SideBar() {

    const [stylistsArray, setStylistsArray] = useState([]);
        
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

    return ( 
        <div className="sidebar" id="side-bar-sticky">
            <Link to="/">
                <img src="/Users/petercrawford/Development/code/Mod5/Hair_Me_Now/Hair_Me_Now_Backend/app/images/export-0001.jpg" style={{ width :225}} alt= "logo" />
            </Link>
            <Search stylistsArray={stylistsArray} />
            <div>
                <nav>
                    {localStorage.token ?
                    <NavLink className="sidebar-btn" to="/stylistappointmentmgmt">Appointment Managment</NavLink> : null}
                    <br/>
                    {localStorage.token ?
                    <NavLink className="sidebar-btn" to="/prices">Price Management</NavLink> : null}
                </nav>
            </div>
        
        </div>
    )
}
export default SideBar