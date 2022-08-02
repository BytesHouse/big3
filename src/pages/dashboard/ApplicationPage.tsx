// Libraries and hooks
import React from 'react';
// Components import
import HamburgerMenu from '../../ui/HamburgerMenu/HamburgerMenu';
import Navigation from '../../ui/Navigation/Navigation';
import DisplayDashboard from './components/DisplayDashboard/DisplayDashboard';
import Boombox from './components/Boombox/Boombox';
// CSS
import style from './ApplicationPage.module.css';

export const ApplicationPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <div className={style.wrapper}>
        <HamburgerMenu />
        <DisplayDashboard />
        <Boombox />
      </div>
    </div>
  );
};
