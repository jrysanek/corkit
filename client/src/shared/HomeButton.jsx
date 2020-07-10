import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HomeButton() {

    const history = useHistory();

    function handleClickHome() {
        history.push('/')
    }
    return (
        <button className='home-button' onClick={handleClickHome}>
            Home
        </button>
    )
}
