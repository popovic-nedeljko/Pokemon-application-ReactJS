import React from 'react';
import { RiSave3Line } from 'react-icons/ri';
import { BsExclamationTriangle } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context';

const YourPokemon = () => {
  const { pathname } = useLocation();
  const id = +pathname.slice(1);
  const { catchedPokemons } = useGlobalContext();

  return (
    <div className='nav'>
      <ul className='nav__list'>
        <li key={catchedPokemons.id} className='nav__item'>
          <button className='nav__btn nav__btn--yourPokemon'>
            <RiSave3Line />
            <span>Your pokemons</span>
          </button>
          <div className='yourPokemon'>
            <ul className='yourPokemon__list'>
              {catchedPokemons.length > 0 ? (
                catchedPokemons.map((pokemon) => {
                  return (
                    <>
                      <li key={pokemon.id} className='preview'>
                        <Link
                          to={`${pokemon.id}`}
                          className={
                            pokemon.id === id
                              ? 'preview__link preview__link--active'
                              : 'preview__link'
                          }
                        >
                          <figure className='preview__fig'>
                            <img src={pokemon.picture} alt='pict' />
                          </figure>
                          <div className='preview__data'>
                            <h4 className='preview__title preview__title--your-pokemon'>
                              {pokemon.name}
                            </h4>
                          </div>
                        </Link>
                      </li>
                    </>
                  );
                })
              ) : (
                <div className='message'>
                  <div>
                    <BsExclamationTriangle />
                  </div>
                  <p>No pokemon yet. Find a nice pokemon and catch it! 👾</p>
                </div>
              )}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default YourPokemon;
