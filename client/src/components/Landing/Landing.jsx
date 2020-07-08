import React from 'react'
import Header from '../../shared/Header'
import HomeButton from '../../shared/HomeButton'

export default function Landing() {
    return (
        <div className="landing-container">
            <div>
                <Header/>
                <button>New Room</button>
                <HomeButton/>
                <button>Sign Out</button>
            </div> 

            <div className="landing-content">
                <p>Image will be here</p>
                <h6>Room Name</h6>
                <button>Edit</button>
                <button>Delete</button>

            </div>

        </div>
    )
}
