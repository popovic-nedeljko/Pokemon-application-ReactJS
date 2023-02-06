import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../context';
import Error from '../../../pages/Error';
import './PokemonList.scss';

const SearchedPokemon = () => {
  const { pokemonData, error } = useGlobalContext();

  if (error && pokemonData === null) return <Error />;

  return (
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
  );
};

export default SearchedPokemon;
