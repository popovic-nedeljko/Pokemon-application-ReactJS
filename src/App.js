import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SinglePokemon from './pages/SinglePokemon';
import Sidebar from './components/Sidebar';
import Error from './pages/Error';
import Navbar from './components/Navbar';

// import components

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Sidebar />
        <SinglePokemon />
        {/* <Routes>
          <Route path='/:id' element={<SinglePokemon />}></Route>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
