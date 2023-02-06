import React from 'react';
import { RxThickArrowLeft, RxThickArrowRight } from 'react-icons/rx';
import { useGlobalContext } from '../../../context';
import './Pagination.scss';

const Pagination = () => {
  const { page, setPage, isSearched, setIsSearched } = useGlobalContext();

  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  const returnToList = () => {
    setIsSearched(false);
  };

  return isSearched ? (
    <div className='pagition'>
      <button
        className='btn--inline pagination__btn--list'
        onClick={returnToList}
      >
        return to list
      </button>
    </div>
  ) : (
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
