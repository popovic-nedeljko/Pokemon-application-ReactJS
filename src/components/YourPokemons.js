import React from 'react';
import { RiSave3Line } from 'react-icons/ri';
import { BsExclamationTriangle } from 'react-icons/bs';

const YourPokemon = () => {
  return (
    <div className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <button class='nav__btn nav__btn--yourPokemon'>
            <RiSave3Line />
            <span>Your pokemons</span>
          </button>
          <div className='yourPokemon'>
            <ul className='yourPokemon__list'>
              <div class='message'>
                <div>
                  <BsExclamationTriangle />
                </div>
                <p>No pokemon yet. Find a nice pokemon and catch it! 👾</p>
              </div>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default YourPokemon;
