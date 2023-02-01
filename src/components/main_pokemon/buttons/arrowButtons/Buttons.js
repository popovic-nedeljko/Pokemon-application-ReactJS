import React from 'react';
import '../ButtonComponents.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../../context';
import { useState } from 'react';
import { useEffect } from 'react';

const ButtonsNextPrev = () => {
  const { pathname } = useLocation();
  const id = +pathname.slice(1);
  let navigate = useNavigate();
  const pageNum = Math.ceil(id / 10);
  const { page, setPage, isSearched, pokemonData } = useGlobalContext();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        if (page === pageNum) {
          navigate(`${+id - 1}`);
        } else {
          navigate(`${+id - 1}`);
          setPage(pageNum);
        }
      } else if (e.key === 'ArrowRight') {
        if (page === pageNum) {
          navigate(`${+id + 1}`);
        } else {
          setPage(pageNum);
          navigate(`${+id + 1}`);
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [id]);

  return (
    <div className='pokemon__info-buttons'>
      <button
        disabled={(isSearched && true) || (+id > 1 ? false : true)}
        onClick={() => {
          if (page === pageNum) {
            navigate(`${+id - 1}`);
          } else {
            navigate(`${+id - 1}`);
            setPage(pageNum);
          }
        }}
        className='btn--next--prev btn--prev'
      >
        <BsFillArrowLeftSquareFill />
      </button>

      <button
        disabled={(isSearched && true) || (!pokemonData && true)}
        onClick={() => {
          if (page === pageNum) {
            navigate(`${+id + 1}`);
          } else {
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
