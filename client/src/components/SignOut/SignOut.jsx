import React from 'react';
import { useHistory } from 'react-router-dom';
import { removeToken } from '../../services/auth';


export default function SignOut() {
    const history = useHistory()

    const handleLogOut = () => {
        removeToken()
        history.push('/')
    }

    return (
            <button onClick={handleLogOut}>Sign Out</button>
    )
}
