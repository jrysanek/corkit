import React from 'react';
import './Photos.css';

export default function Photos() {
    return (
        <div className="photos">
            <h4>Photos</h4>
            <input type="text" placeholder="Add Image Url"/>
            <button>+</button>
            <button>-</button>     
        </div>
    )
}
