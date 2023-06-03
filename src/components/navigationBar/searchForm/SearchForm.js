import React, { useRef } from 'react';
import { useGlobalContext } from '../../../context';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = () => {
  const { setSearchPokemon, pokemonData, setIsSearched } = useGlobalContext();

  const searchValue = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    setIsSearched(true);
    setSearchPokemon(searchValue.current.value);
    searchValue.current.value = '';
    searchValue.current.blur();
  };

  return (
    <form className='search'>
      <input
        className='search__field'
        ref={searchValue}
        type='text'
        placeholder='Search over 1.000 pokemons...'
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
