import React from 'react';
import style from './Navigation.module.css';
import user from '../../assets/icon/profile.svg';
import burger from '../../assets/icon/burger.svg';
import Logo from '../Logo/Logo';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { auth } = useSelector((store: any) => store.auth);
  return (
    <header className={style}>
      <div className={style.burger}>
        <img src={burger} alt="menu" />
      </div>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.userInfo}>
        <div>{auth.name}</div>
        <div>
          <img src={user} alt="avatar" className={style.userPhoto} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
