import React from 'react'

export default function LocationInput() {
    const location = "São Paulo - SP"

    return (
        <div className="container-location-input">
            <input type="text" placeholder={"Onde : " + location}/>
            <i className="location-ico"/>
            <i className="remove-ico"/>
        </div>
    )
}
