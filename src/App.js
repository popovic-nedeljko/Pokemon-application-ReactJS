import React from 'react';
import SinglePokemon from './components/main_pokemon/SinglePokemon';
import Sidebar from './components/sideBar/Sidebar';
import Navbar from './components/navigationBar/Navbar';
import Popup from './components/popup/Popup';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Sidebar />
      <SinglePokemon />
      <Popup />
    </div>
  );
}

export default App;
