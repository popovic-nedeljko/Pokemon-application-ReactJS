import React from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import Copyright from './Copyright';

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
