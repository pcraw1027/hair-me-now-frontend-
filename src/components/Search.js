import React, { useState} from 'react'
import { useHistory} from "react-router"

function Search({stylistsArray}) {
    const [value, setValue] = useState("")
    const history = useHistory()
    
    function handleSubmit(e) {
        e.preventDefault()
        stylistsArray.forEach(function(stylistObj) {
            if (stylistObj.zip_code === value()) {
                // let's think about this!!!!!!
                // history.push(`/`)
            }
        })
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} id="search-form">
                <input placeholder="Search stylist zipcode" value={value} onChange={(e) => setValue(e.target.value)}/>
                <input type="submit" value="Go"/>
            </form>
            
        </div>
    )
}
export default Search