import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './shared/Footer';
import SignUp from './components/SignUp/SignUp';
import Landing from './components/Landing/Landing';
import Room from './components/Room/Room';
import { verifyUser } from '../src/services/auth';


function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    const handleVerify = async () => {
      const verifiedUser = await verifyUser()
      if (verifiedUser) {
        setUser(verifiedUser)
        
      }  
    }
    handleVerify()
    
  },[])

  return (
  
    <div className="app" user={user}>
      <div className="board-bkg">
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} /> 
        <Route path='/sign-up' render={() => <SignUp setUser={setUser}/>} />
        <Route path='/landing'  render={() => user ? <Landing user={user} /> : <Redirect to='/login' />}  />
        <Route path='/room/:id' render={params => <Room params={params} />} />    
       
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
