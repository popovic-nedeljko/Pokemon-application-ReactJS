import React, { useEffect } from 'react';
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
  const navigate = useNavigate();
  const { isSearched, pokemonData } = useGlobalContext();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        if (id > 1) navigate(`${id - 1}`);
      } else if (e.key === 'ArrowRight') {
        navigate(`${id + 1}`);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [id, navigate]);

  return (
    <div className='pokemon__info-buttons'>
      <button
        disabled={isSearched || id <= 1}
        onClick={() => navigate(`${id - 1}`)}
        className='btn--next--prev btn--prev'
      >
        <BsFillArrowLeftSquareFill />
      </button>

      <button
        disabled={isSearched || !pokemonData}
        onClick={() => navigate(`${id + 1}`)}
        className='btn--next--prev btn--next'
      >
        <BsFillArrowRightSquareFill />
      </button>
    </div>
  );
};

export default ButtonsNextPrev;
