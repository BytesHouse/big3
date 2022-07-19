import React from 'react';
import style from './Navigation.module.css';
import user from '../../assets/icon/profile.svg';
import burger from '../../assets/icon/burger.svg';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <header className={style}>
      <div className={style.burger}>
        <img src={burger} alt="menu" />
      </div>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.userInfo}>
        <div>John Smith</div>
        <div>
          <img src={user} alt="avatar" className={style.userPhoto} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
