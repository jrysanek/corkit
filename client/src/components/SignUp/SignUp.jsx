import React, { useState } from 'react';
import './SignUp.css';
import Header from '../../shared/Header';
import HomeButton from '../../shared/HomeButton';

export default function SignUp() {
    const [ newForm, setNewForm ] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleNewInput = (e) => {
        let { name, value } = e.target
        setNewForm(prevState => ({
            ...prevState,
            [name]: value
        })
        )
    }

    return (
        <div className="sign-up-container">
            <Header />            
        

            <div className="sign-up-form">
                <form>
                    <input 
                        name='email'
                        onChange={handleNewInput} 
                        value={newForm.email} 
                        placeholder='Email'
                    />
                        
                    <input 
                        name='password'
                        onChange={handleNewInput} 
                        value={newForm.password} 
                        placeholder='Password'
                    />


                    <input 
                        name='confirmPassword'
                        onChange={handleNewInput} 
                        value={newForm.confirmPassword} 
                        placeholder='Confirm Password'
                    />

                    <button>Sign Up</button>
                </form>
                <HomeButton />
            </div>
        
        </div>
    )

}
        