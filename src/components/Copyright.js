import React from 'react';

const Sidebar = () => {
  return (
    <div className='copyright'>
      <p>
        &copy; Copyright by
        <a
          className='ln-link'
          target='_blank'
          href='https://github.com/popovic-nedeljko'
        >
          Nedeljko Popovic
        </a>
        . Welcome to PokemonApp. Have a nice time broworsing for your favorite
        pokemons.
      </p>
    </div>
  );
};

export default Sidebar;
