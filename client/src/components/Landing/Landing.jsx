import React from 'react'
import Header from '../../shared/Header'
import HomeButton from '../../shared/HomeButton'
import LandingCards from './LandingCards'

export default function Landing() {
    return (
        <div className="landing-container">
            <div>
                <Header/>
                <button>New Room</button>
                <HomeButton/>
                <button>Sign Out</button>
            </div> 

            <div>
                <LandingCards />
            </div>

        </div>
    )
}
