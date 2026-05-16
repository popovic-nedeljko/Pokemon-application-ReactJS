import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../../context';
import SearchedPokemon from './SearchedPokemon';
import './PokemonList.scss';

const PokemonList = () => {
  const { pokeList, isSearched } = useGlobalContext();
  let { pathname } = useLocation();
  const id = +pathname.slice(1);

  return isSearched ? (
    <SearchedPokemon />
  ) : (
    <div className='search-results'>
      <ul className='results'>
        {pokeList.map((item) => {
          return (
            <li key={item.id} className='preview'>
              <Link
                to={`${item.id}`}
                className={
                  item.id === id
                    ? `preview__link preview__link--active`
                    : `preview__link`
                }
              >
                <figure className='preview__fig'>
                  <img
                    src={item.picture ? item.picture : item.pictureSub}
                    alt={item.name}
                  />
                </figure>
                <div className='preview__data'>
                  <h4 className='preview__title'>{item.name}</h4>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
