import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Hamburger.module.css';
import signOut from '../../assets/icon/input.svg';
import { PersonIcon, GroupPersonIcon } from '../../assets/icon/icons.tsx';

const HamburgerMenu = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const onNavigateHandler = (url: string, page: number) => {
    navigate(url);
    setPage(page);
  };
  return (
    <div className={style.container}>
      <div>
        <div onClick={() => onNavigateHandler('teams', 1)} className={style.flex}>
          {page === 1 ? <GroupPersonIcon color="red" /> : <GroupPersonIcon color="#9C9C9C" />}
          <span>Teams</span>
        </div>
        <div onClick={() => onNavigateHandler('players', 2)} className={style.flex}>
          {page === 2 ? <PersonIcon color="red" /> : <PersonIcon color="#9C9C9C" />}
          <span>Players</span>
        </div>
      </div>
      <div>
        <div onClick={() => onNavigateHandler('/', 0)} className={style.flex}>
          <img src={signOut} alt="person" />
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
