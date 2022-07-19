import React from 'react';
import style from './Hamburger.module.css';
import teams from '../../assets/icon/group_person.svg';
import person from '../../assets/icon/person.svg';
import signOut from '../../assets/icon/input.svg';

const HamburgerMenu = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.flex}>
          <img src={teams} alt="teams" />
          <span>Teams</span>
        </div>
        <div className={style.flex}>
          <img src={person} alt="person" />
          <span>Players</span>
        </div>
      </div>
      <div>
        <div className={style.flex}>
          <img src={signOut} alt="person" />
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
