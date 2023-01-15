import React from 'react';
import { RxThickArrowLeft, RxThickArrowRight } from 'react-icons/rx';
import { useGlobalContext } from '../context';

const Pagination = () => {
  const { nextUrl, prevUrl, fetchPokemons, page } = useGlobalContext();

  const nextPage = () => {
    fetchPokemons(nextUrl);
  };
  const prevPage = () => {
    fetchPokemons(prevUrl);
  };

  return (
    (page === 1027 && (
      <div className='pagination'>
        <button
          className='btn--inline pagination__btn--prev'
          onClick={prevPage}
        >
          <RxThickArrowLeft />
          <span>{`Page ${page - 1}`}</span>
        </button>
      </div>
    )) ||
    (page === 1 ? (
      <div className='pagination'>
        <button
          className='btn--inline pagination__btn--next'
          onClick={nextPage}
        >
          <span>{`Page ${page + 1}`}</span>
          <RxThickArrowRight />
        </button>
      </div>
    ) : (
      <div className='pagination'>
        <button
          className='btn--inline pagination__btn--next'
          onClick={nextPage}
        >
          <span>{`Page ${page + 1}`}</span>
          <RxThickArrowRight />
        </button>
        <button
          className='btn--inline pagination__btn--prev'
          onClick={prevPage}
        >
          <RxThickArrowLeft />
          <span>{`Page ${page - 1}`}</span>
        </button>
      </div>
    ))
  );
};

export default Pagination;
