import React from 'react';
import './Home.css';
import Header from '../../shared/Header';
import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory();

    function handleClickLogin() {
        history.push('/login')
    }

    function handleClickSignUp() {
        history.push('/sign-up')
    }


    return (
        <>
            <Header />

            <div className="home-content">
                <h3>- Plan</h3>
                <h3>- Create</h3>
                <h3>- Enjoy</h3>

                <button onClick={handleClickLogin}> Login</button>
                <button onClick={handleClickSignUp}> Sign Up</button>
            </div>

        </>
    )
}
