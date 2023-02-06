import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loading from '../../loading/Loading';
import { useGlobalContext } from '../../../context';
import './PokemonList.scss';

const PokemonList = () => {
  const { pokeList, loading, pokemonData, isSearched } = useGlobalContext();

  let { pathname } = useLocation();
  const id = +pathname.slice(1);

  if (loading) {
    return <Loading />;
  }

  return isSearched ? (
    <div className='search-results'>
      <ul className='results'>
        <li className='preview' key={pokemonData.id}>
          <Link
            key={pokemonData.id}
            to={`${pokemonData.id}`}
            className={`preview__link preview__link--active`}
          >
            <figure className='preview__fig'>
              <img
                src={
                  pokemonData.picture
                    ? pokemonData.picture
                    : pokemonData.pictureSub
                }
                alt='pict'
              />
            </figure>
            <div className='preview__data'>
              <h4 className='preview__title'>{pokemonData.name}</h4>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  ) : (
    <div className='search-results'>
      <ul className='results'>
        <li className='preview'>
          {pokeList.map((item) => {
            return (
              <Link
                key={item.id}
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
                    alt='pict'
                  />
                </figure>
                <div className='preview__data'>
                  <h4 className='preview__title'>{item.name}</h4>
                </div>
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default PokemonList;
