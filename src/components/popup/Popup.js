import React from 'react';
import { useGlobalContext } from '../../context';
import { CgPokemon } from 'react-icons/cg';
import colorTypes from '../../constants/colorTypes';
import img from '../../img/YourPokemon-popup.jpg';
import './Popup.scss';

const Popup = () => {
  const { pokemonData, modal } = useGlobalContext();

  if (pokemonData)
    return (
      <>
        <div className={modal ? 'overlay' : 'overlay hidden'}></div>
        <div
          className={
            modal ? 'add-pokemon-window ' : 'add-pokemon-window hidden'
          }
        >
          <img
            src={img}
            alt='Logo'
            className='add-pokemon-window--message_logo'
          />
          <h2 className='add-pokemon-window--message'>
            Congradulations ! ! ! <br /> You have caught
            <p
              className='add-pokemon-window--message--pokename'
              style={{ color: colorTypes[pokemonData.type[0]] }}
            >
              <CgPokemon />
              {pokemonData.name}
              <CgPokemon />
            </p>
            Check 'your pokemons'
          </h2>
        </div>
      </>
    );
};

export default Popup;
