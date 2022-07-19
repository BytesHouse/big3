import React from 'react';
import { Link } from 'react-router-dom';
import style from './StyledLink.module.css';

const StyledLink = () => {
  return (
    <div className={style.link}>
      <Link className={style.disabledLink} to="/">
        Text
      </Link>
    </div>
  );
};

export default StyledLink;
