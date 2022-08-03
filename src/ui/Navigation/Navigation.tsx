import React from 'react';
import style from './Navigation.module.css';
import user from '../../assets/icon/profile.svg';
import burger from '../../assets/icon/burger.svg';
import Logo from '../Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../../core/redux/store/reducers/dashboard/dashboardSlice';

const Navigation = () => {
  const { auth } = useSelector((store: any) => store.auth);
  // eslint-disable-next-line no-unused-vars
  const { dashboard } = useSelector((store: any) => store.dashboard);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <header className={style}>
      <div className={style.burger}>
        <img src={burger} alt="menu" onClick={toggle} />
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
