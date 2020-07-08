import React from 'react'
import Header from '../../shared/Header'
import HomeButton from '../../shared/HomeButton'

export default function Login() {
    return (
        <div className="login-container">
            <Header />

            <div className="login-form">
                <input placeholder='Email'></input>
                <input placeholder='Password'></input>

                <button>Login</button>
                <HomeButton />
            </div>
            
        </div>
    )
}
