import React from 'react'
import Header from '../../shared/Header'
import HomeButton from '../../shared/HomeButton'

export default function Login() {
    return (
        <div className="Login-container">
            <Header />

            <div>
                <input placeholder='Email'></input>
                <input placeholder='Password'></input>

                <button>Login</button>
                <HomeButton />
            </div>
            
        </div>
    )
}
