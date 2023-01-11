import React from 'react';
import { RxThickArrowLeft, RxThickArrowRight } from 'react-icons/rx';

const Pagination = () => {
  return (
    <>
      <button className='btn--inline pagination__btn--next'>
        <RxThickArrowRight />
      </button>
      <button className='btn--inline pagination__btn--prev'>
        <RxThickArrowLeft />
      </button>
    </>
  );
};

export default Pagination;
