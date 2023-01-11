import React from 'react';
import { useGlobalContext } from '../context';
import { ImSearch } from 'react-icons/im';

const SearchForm = () => {
  return (
    <form className='search' action='submit'>
      <input
        type='text'
        className='search__field'
        placeholder='Search over 1.000 pokemons...'
      />
      <button className='btn search__btn'>
        <ImSearch />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
