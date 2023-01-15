import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SinglePokemon from './components/SinglePokemon';
import Sidebar from './components/Sidebar';
import Error from './pages/Error';
import Navbar from './components/Navbar';

// import components

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <SinglePokemon />
      </BrowserRouter>
    </div>
  );
}

export default App;
