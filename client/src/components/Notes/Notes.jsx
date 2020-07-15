import React from 'react'
import './Notes.css'

export default function Notes() {
    return (
        <div className="notes">
            <h4>Notes</h4>
            <textarea placeholder="Add Notes"></textarea>
            <p>+</p>
            <p>-</p>
        </div>
    )
}
