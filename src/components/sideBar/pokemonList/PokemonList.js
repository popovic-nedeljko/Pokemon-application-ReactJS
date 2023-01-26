import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loading from '../../loading/Loading';
import { useGlobalContext } from '../../../context';
import './PokemonList.scss';

const PokemonList = () => {
  const { pokeList, loading, page } = useGlobalContext();
  const { pathname } = useLocation();
  const id = +pathname.slice(1);

  if (loading) {
    return <Loading />;
  }

  return (
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
