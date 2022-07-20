import React from 'react';
import { Link } from 'react-router-dom';
import style from './StyledLink.module.css';
import { link } from '../../types/link';

const StyledLink = (props: link) => {
  return (
    <div className={style.link}>
      <Link className={style.disabledLink} to={props.path}>
        {props.text}
      </Link>
    </div>
  );
};

export default StyledLink;
