import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Hamburger.module.css';
import teams from '../../assets/icon/group_person.svg';
import person from '../../assets/icon/person.svg';
import signOut from '../../assets/icon/input.svg';

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const onNavigateHandler = (url: string) => {
    navigate(url);
  };
  return (
    <div className={style.container}>
      <div>
        <div onClick={() => onNavigateHandler('teams')} className={style.flex}>
          <img src={teams} alt="teams" />
          <span>Teams</span>
        </div>
        <div onClick={() => onNavigateHandler('players')} className={style.flex}>
          <img src={person} alt="person" />
          <span>Players</span>
        </div>
      </div>
      <div>
        <div onClick={() => onNavigateHandler('/')} className={style.flex}>
          <img src={signOut} alt="person" />
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
