import React from 'react';
import logo from '../../img/International_Pokémon_logo.svg.png';
import SearchForm from './searchForm/SearchForm';
import YourPokemon from './storePokemons/YourPokemons';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='header'>
      <Link to='/'>
        <img src={logo} alt='logo' className='header__logo' />
      </Link>
      <SearchForm />
      <YourPokemon />
    </nav>
  );
};

export default Navbar;
