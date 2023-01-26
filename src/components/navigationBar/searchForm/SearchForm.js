import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../../../context';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './SearchForm.scss';
import { useState } from 'react';

const SearchForm = () => {
  const { searchPokemon, setSearchPokemon, pokemonData } = useGlobalContext();

  const searchPokeName = (e) => {
    setSearchPokemon(e.target.value);
  };

  const handleClick = () => {
    setSearchPokemon('');
  };

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        className='search__field'
        type='text'
        placeholder='Search over 1.000 pokemons...'
        value={searchPokemon}
        onChange={searchPokeName}
      />
      <Link to={`${pokemonData && pokemonData.id}`}>
        <button className='btn search__btn' onClick={handleClick}>
          <ImSearch />
          <span>Search</span>
        </button>
      </Link>
    </form>
  );
};

export default SearchForm;
