import React from 'react';
import style from './Error.module.css';
import error from '../../assets/images/illustration.svg';

const Error = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <img src={error} alt="Not found" />
        <h2>Page not found</h2>
        <p>Sorry, we can’t find what you’re looking for</p>
      </div>
    </div>
  );
};

export default Error;
