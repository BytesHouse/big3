import React from 'react';
import style from './ApplicationPage.module.css';
import HamburgerMenu from '../../ui/HamburgerMenu/HamburgerMenu';
import Navigation from '../../ui/Navigation/Navigation';
import SearchBox from '../../ui/SearchBox/SearchBox';
import AddButton from '../../ui/AddButton/AddButton';

export const ApplicationPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <div className={style.wrapper}>
        <HamburgerMenu />
        <div className={style.display}>
          <div className={style.top}>
            <SearchBox />
            <AddButton />
          </div>
          <div>grid</div>
          <div>footer</div>
        </div>
      </div>
    </div>
  );
};
