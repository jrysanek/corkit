import React from 'react'
import './Notes.css'

export default function Notes() {
    return (
        <div className="notes">
            <h4>Notes</h4>
            <input placeholder="Add Notes"></input>
            <button>+</button>
            <button>-</button>
        </div>
    )
}
