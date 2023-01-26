import React from 'react';
import '../ButtonComponents.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../../context';

const ButtonsNextPrev = () => {
  const { pathname } = useLocation();
  const id = +pathname.slice(1);
  let navigate = useNavigate();
  const { nextUrl, prevUrl, fetchPokemons, page, setPage } = useGlobalContext();
  const pageNum = Math.ceil(id / 10);

  return (
    <div className='pokemon__info-buttons'>
      <button
        disabled={+id > 1 ? false : true}
        onClick={() => {
          if (page === pageNum) {
            navigate(`${+id - 1}`);
          } else {
            navigate(`${+id - 1}`);
            setPage(pageNum);
            // fetchPokemons(prevUrl);
          }
        }}
        className='btn--next--prev btn--prev'
      >
        <BsFillArrowLeftSquareFill />
      </button>

      <button
        onClick={() => {
          if (page === pageNum) {
            navigate(`${+id + 1}`);
          } else {
            // fetchPokemons(nextUrl);
            setPage(pageNum);
            navigate(`${+id + 1}`);
          }
        }}
        className='btn--next--prev btn--next'
      >
        <BsFillArrowRightSquareFill />
      </button>
    </div>
  );
};

export default ButtonsNextPrev;
