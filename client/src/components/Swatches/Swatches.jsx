import React from 'react';
import './Swatches.css';

export default function Swatches() {
    return (
        <div className="swatches">
            <h4>Swatches</h4>
            <input type="text" placeholder="Add Swatch Url"/>
            <button>+</button>
            <button>-</button>
        </div>
    )
}
