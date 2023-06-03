import React from 'react';
import '../ButtonComponents.scss';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../../context';
import { useEffect } from 'react';

const ButtonsNextPrev = () => {
  const { pathname } = useLocation();
  const id = +pathname.slice(1);
  let navigate = useNavigate();
  const { page, setPage, isSearched, pokemonData } = useGlobalContext();
  const pageNum = Math.ceil(id / 10);
  // console.log(id);
  // console.log(pageNum);
  // console.log(pageNum === +page);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        if (pageNum === +page) {
          navigate(`${+id - 1}`);
        } else {
          setPage(pageNum);
          navigate(`${+id - 1}`);
        }
      } else if (e.key === 'ArrowRight') {
        if (pageNum === +page) {
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
  }, [page, pageNum, id, navigate, setPage]);

  return (
    <div className='pokemon__info-buttons'>
      <button
        disabled={(isSearched && true) || (+id > 1 ? false : true)}
        onClick={() => {
          navigate(`${+id - 1}`);
          if (pageNum !== +page) {
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
          navigate(`${+id + 1}`);
          if (pageNum !== +page) {
            setPage(pageNum);
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
