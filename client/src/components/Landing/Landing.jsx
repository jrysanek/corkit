import React, { useState, useEffect }from 'react';
import HomeButton from '../../shared/HomeButton';
import LandingCards from './LandingCards';
import { getRooms } from '../../services/room';
import './Landing.css';

export default function Landing() {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetchRooms()
    },[]) 

    const fetchRooms = async () => {
        let data = await getRooms()
        setRooms(data)
    }

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
                {rooms.map(room => <LandingCards name={room.name} image={room.image_url} id={room.id}/> )}
                
            </div>

        </div>
    )
}
