import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import './Loading.scss';
const Loading = () => {
  return (
    <div className='spinner'>
      <ImSpinner2 />
    </div>
  );
};

export default Loading;
