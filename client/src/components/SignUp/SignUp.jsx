import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUp.css';
import { registerUser, verifyUser, loginUser } from '../../services/auth';
import Header from '../../shared/Header';
import HomeButton from '../../shared/HomeButton';

export default function SignUp(props) {

    const [ newForm, setNewForm ] = useState({
        email: '',
        password: '',
        confirmPassword: ''
        // isError: false,
        // errorMsg:''
    })

    const handleNewInput = (e) => {
        let { name, value } = e.target
        setNewForm(prevState => ({
            ...prevState,
            [name]: value
        })
        )
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const { history, setUser } = props
     
      let newUser =  await registerUser(newForm)
        .then(res => {
            setUser(res.user)
        })
        .then(() =>history.push('/landing'))
        .catch(error =>{
            console.error(error)

            setNewForm({
                // isError:true,
                // errorMsg: 'Sign-Up details are invalid',
                email: '',
                password:'',
                // confirmPassword: ''
            })
        })
    }



    return (
        <div className="sign-up-container">
            <Header />            
        

            <div className="sign-up-form">
                <form onSubmit={handleSignUp}>
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
                        type='password'
                    />


                    {/* <input 
                        name='confirmPassword'
                        onChange={handleNewInput} 
                        value={newForm.confirmPassword} 
                        placeholder='Confirm Password'
                        type='password'
                    /> */}

                    <button type="submit">Sign Up</button>
                </form>
                <HomeButton />
            </div>
        
        </div>
    )

}
        