import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import logo from '../img/International_Pokémon_logo.svg.png';
import SearchForm from './SearchForm';
import YourPokemon from './YourPokemons';

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
