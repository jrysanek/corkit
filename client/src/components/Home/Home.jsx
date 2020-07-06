import React from 'react';
import Header from '../../shared/Header';

export default function Home() {
    return (
        <div className= "home">
            <Header />

            <div>
                <h3>- Plan</h3>
                <h3>- Create</h3>
                <h3>- Enjoy</h3>

                <button> Login</button>
                <button> Sign Up</button>
            </div>
            
        </div>
    )
}
