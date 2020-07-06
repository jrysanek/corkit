import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './shared/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Route exact path='/'>
           <Home />
        </Route>

      </header>
        <Route path='/Login'>
          <Login />
        </Route>

      <Footer />
    </div>
  );
}

export default App;
