import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './shared/Footer';
import SignUp from './components/SignUp/SignUp';
import Landing from './components/Landing/Landing';
import Room from './components/Room/Room';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Route exact path='/' component={Home} />
     
      </header>

        <Route path='/login' component={Login} /> 
        <Route path='/sign-up' component={SignUp} />
        <Route path='/landing' component={Landing} />
        <Route path='/room' component={Room} />
        
        {/* change path to /landing/room/:id after initial edit is done */}
      <Footer />
    </div>
  );
}

export default App;
