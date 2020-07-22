import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingCards({name, image, id}) {
    

    return (
        <div className="landing-cards">
            <img src={image} alt={image.name} />
            <h6>{name}</h6>
            <Link to={{pathname:`/room/${id}`, state: {name: name}}}>
            <button >Edit</button>
            </Link>
            <button>Delete</button>
         </div>
    )
}
