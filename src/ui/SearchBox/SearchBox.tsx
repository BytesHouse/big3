import React from 'react';
import style from './searchBox.module.css';
import search from '../../assets/icon/search.svg';

const SearchBox = () => {
  return (
    <div className={style.wrapper}>
      <input className={style.inp} placeholder="Search..." type="text" />
      <img src={search} alt="search" />
    </div>
  );
};

export default SearchBox;
