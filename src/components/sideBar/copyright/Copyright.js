import React from 'react';
import './Copyright.scss';

const Sidebar = () => {
  return (
    <div className='copyright'>
      <p>
        &copy; Copyright by
        <a
          className='ln-link'
          target='_blank'
          href='https://github.com/popovic-nedeljko'
          rel='noreferrer'
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
