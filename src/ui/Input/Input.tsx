import React from 'react';
import style from './Input.module.css';

const Input = () => {
  return (
    <div>
      <div>
        <input type="text" name="login" className={style.inp} />
        <label htmlFor="login"></label>
      </div>
    </div>
  );
};

export default Input;
