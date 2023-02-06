import React, { useRef } from 'react';
import { useGlobalContext } from '../../../context';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = () => {
  const { searchPokemon, setSearchPokemon, pokemonData, setIsSearched } =
    useGlobalContext();

  const searchValue = useRef(null);

  const handleClick = (e) => {
    setIsSearched(true);
    setSearchPokemon(e.target.value.toLowerCase());
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
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value.toLowerCase())}
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
