import React from 'react';

import Loading from './Loading';
import { useGlobalContext } from '../context';

const PokemonList = () => {
  const { pokeList, loading } = useGlobalContext();

  if (loading) <Loading />;

  return (
    <>
      <ul className='results'>
        <li className='preview'>
          {pokeList.map((item) => {
            return (
              <a href={`/${item.id}`} className='preview__link'>
                <figure className='preview__fig'>
                  <img src={item.picture} alt='pict' />
                </figure>
                <div class='preview__data'>
                  <h4 class='preview__title'>{item.name}</h4>
                </div>
              </a>
            );
          })}
        </li>
      </ul>
    </>
  );
};

export default PokemonList;
