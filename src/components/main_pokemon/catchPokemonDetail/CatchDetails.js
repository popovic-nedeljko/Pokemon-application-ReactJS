import React, { useCallback, useEffect, useState } from 'react';
import { CgPokemon } from 'react-icons/cg';
import { useGlobalContext } from '../../../context';
import './/CatchDetails.scss';

const CatchDetails = () => {
  const { catchedPokemons } = useGlobalContext();

  return (
    <div className='pokemon__your-pokemon-details'>
      <div className='pokemon__info'>
        <CgPokemon />
        <span className='pokemon__info-text'>You have: </span>
        <span className='pokemon__info-data pokemon__info-data--pokemons'>
          {catchedPokemons.length}
        </span>
        <span className='pokemon__info-text'>pokemons</span>
      </div>
    </div>
  );
};

export default CatchDetails;

// ${this._data.yourPokemons.length}
