import React from 'react';
import PokemonList from './pokemonList/PokemonList';
import Pagination from './pagination/Pagination';
import Copyright from './copyright/Copyright';
import './Sidebar.scss';
const Sidebar = () => {
  return (
    <div className='search-results'>
      <PokemonList />
      <Pagination />
      <Copyright />
    </div>
  );
};

export default Sidebar;
