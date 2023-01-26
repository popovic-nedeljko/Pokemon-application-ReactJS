import React from 'react';
// import { Route, Routes } from 'react-router-dom';

import SinglePokemon from './components/main_pokemon/SinglePokemon';
import Sidebar from './components/sideBar/Sidebar';
import Error from './pages/Error';
import Navbar from './components/navigationBar/Navbar';
import Popup from './components/popup/Popup';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Sidebar />
      <SinglePokemon />
      <Popup />
      {/* <Routes>
        <Route path='popup' element={<Popup />} />
      </Routes> */}
    </div>
  );
}

export default App;
