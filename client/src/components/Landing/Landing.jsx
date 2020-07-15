import React from 'react';
import Header from '../../shared/Header';
import HomeButton from '../../shared/HomeButton';
import LandingCards from './LandingCards';
import './Landing.css';
export default function Landing() {
    return (
        <div className="landing">
            <div className="landing-nav">
                <h1>Cork It</h1>
                <h2>Welcome,</h2>
                    <span className="landing-nav-right">
                        <HomeButton/>
                        <button>New Room</button>
                        <button>Sign Out</button>
                    </span>
            </div> 

            <div className="landing-cards-container">
                <LandingCards />
            </div>

        </div>
    )
}
