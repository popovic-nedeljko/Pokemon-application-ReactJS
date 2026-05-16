import React from 'react';
import { RxThickArrowLeft, RxThickArrowRight } from 'react-icons/rx';
import { useGlobalContext } from '../../../context';
import './Pagination.scss';

const Pagination = () => {
  const { page, setPage, isSearched, setIsSearched, totalPages } = useGlobalContext();

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  const returnToList = () => setIsSearched(false);

  if (isSearched) {
    return (
      <div className='pagination'>
        <button className='btn--inline pagination__btn--list' onClick={returnToList}>
          return to list
        </button>
      </div>
    );
  }

  const isFirst = page === 1;
  const isLast = totalPages > 0 && page === totalPages;

  return (
    <div className='pagination'>
      {!isFirst && (
        <button className='btn--inline pagination__btn--prev' onClick={prevPage}>
          <RxThickArrowLeft />
          <span>{`Page ${page - 1}`}</span>
        </button>
      )}
      {!isLast && (
        <button className='btn--inline pagination__btn--next' onClick={nextPage}>
          <span>{`Page ${page + 1}`}</span>
          <RxThickArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
