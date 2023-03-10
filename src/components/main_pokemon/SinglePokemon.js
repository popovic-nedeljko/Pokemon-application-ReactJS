import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Buttons from './buttons/arrowButtons/Buttons';
import CatchButton from './buttons/catchPokemonButton/CatchButton';
import Pokemon from './pokeCard/Pokemon';
import CatchDetails from './catchPokemonDetail/CatchDetails';
import Home from '../../pages/Home';

const SinglePokemon = () => {
  return (
    <div className='pokemon'>
      <Buttons />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:pokeId' element={<Pokemon />} />
      </Routes>
      <CatchButton />
      <CatchDetails />
    </div>
  );
};

export default SinglePokemon;
