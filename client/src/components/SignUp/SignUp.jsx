import React from 'react'
import Header from '../../shared/Header';
import HomeButton from '../../shared/HomeButton';

export default function SignUp() {
    return (
        <div className="sign-up-container">
            <Header />            
        

            <div className="sign-up-form">
                <input placeholder='Email'></input>
                <input placeholder='Password'></input>
                <input placeholder='Confirm Password'></input>

                <button>Sign Up</button>
                <HomeButton />
            </div>
        
        </div>
    )

}
        