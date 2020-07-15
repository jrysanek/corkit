import React from 'react'
import Header from '../../shared/Header'
import HomeButton from '../../shared/HomeButton'
import LandingCards from './LandingCards'

export default function Landing() {
    return (
        <div className="landing-container">
            <div className="landing-nav">
                <Header/>
                <button>New Room</button>
                <HomeButton/>
                <button>Sign Out</button>
            </div> 

            <div className="landing-cards-container">
                <LandingCards />
            </div>

        </div>
    )
}
