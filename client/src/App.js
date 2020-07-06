import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './shared/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Route exact path='/'>
           <Home />
        </Route>

      </header>

      <Footer />
    </div>
  );
}

export default App;
