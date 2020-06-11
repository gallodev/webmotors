import React from 'react'
import { FaLocationArrow , FaWindowClose } from "react-icons/fa";

export default function LocationInput() {
    const location = "São Paulo - SP"

    return (
        <div className="container-location-input">
            <input type="text" placeholder={"Onde : " + location}/>
            <FaLocationArrow size={25} className="location-ico"  />            
            <FaWindowClose size={25} className="remove-ico"  />                        
        </div>
    )
}
