import React, { useRef } from 'react';
import { useGlobalContext } from '../../../context';
import { ImSearch } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm = () => {
  const { setSearchPokemon, setIsSearched } = useGlobalContext();
  const navigate = useNavigate();
  const searchValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = searchValue.current.value.trim().toLowerCase();
    if (!value) return;
    setIsSearched(true);
    setSearchPokemon(value);
    navigate(value);
    searchValue.current.value = '';
    searchValue.current.blur();
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        className='search__field'
        ref={searchValue}
        type='text'
        placeholder='Search over 1.000 pokemons...'
      />
      <button type='submit' className='btn search__btn'>
        <ImSearch />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
