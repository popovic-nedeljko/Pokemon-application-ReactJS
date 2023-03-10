import React from 'react';
import logo from '../../img/International_Pokémon_logo.svg.png';
import SearchForm from './searchForm/SearchForm';
import YourPokemon from './storePokemons/YourPokemons';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='header'>
      <a href='/'>
        <img src={logo} alt='logo' className='header__logo' />
      </a>
      <SearchForm />
      <YourPokemon />
    </nav>
  );
};

export default Navbar;
