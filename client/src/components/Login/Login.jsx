import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../shared/Header';
import HomeButton from '../../shared/HomeButton';
import { loginUser } from '../../services/auth';

export default function Login() {
    let history = useHistory()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        let { name, value } = e.target
        setForm(prevState => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try { 
            loginUser(form) 
            history.push('/landing')
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className="login-container">
            <Header />

            <div className="login-form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input name='email' value={form.email} onChange={handleInput} placeholder='Email'></input>
                    <input name='password' value={form.password} onChange={handleInput} placeholder='Password'></input>

                    <button>Login</button>
                </form>
                <HomeButton />

            </div>

        </div>
    )
}
