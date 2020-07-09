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
        
        <Route exact path='/'>
           <Home />
        </Route>

      </header>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/sign-up'>
          <SignUp />
        </Route>

        <Route path='/landing'>
          <Landing />
        </Route>

        <Route path='/room'>
          <Room />
        </Route>
        {/* change path to /landing/room/:id after initial edit is done */}

      <Footer />
    </div>
  );
}

export default App;
