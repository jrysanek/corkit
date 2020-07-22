import React, { useState, useEffect }from 'react';
import HomeButton from '../../shared/HomeButton';
import LandingCards from './LandingCards';
import { getRooms } from '../../services/room';
import './Landing.css';
import SignOut from '../SignOut/SignOut';

export default function Landing() {  
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetchRooms()
    },[]) 

    const fetchRooms = async () => {
        let dataRooms = await getRooms()
        setRooms(dataRooms)
    }

    return (
        <div className="landing">
            <div className="landing-nav">
                <h1>Cork It</h1>
                <h2>Welcome,   </h2> 
                    <span className="landing-nav-right">
                        <HomeButton/>
                        <button>New Room</button>
                        <SignOut/>
                    </span>
            </div> 

            <div className="landing-cards-container">
                {rooms.map(room => <LandingCards name={room.name} image={room.image_url} id={room.id} key={room.id}/> )}
                
            </div>

        </div>
    )
}
