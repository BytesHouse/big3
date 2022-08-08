// Libraries and hooks
import React from 'react';
// Components import
import HamburgerMenu from '../../ui/HamburgerMenu/HamburgerMenu';
import Navigation from '../../ui/Navigation/Navigation';
import Boombox from './components/Boombox/Boombox';
import DisplayDashboard from './components/DisplayDashboard/DisplayDashboard';
// CSS
import style from './Dashboard.module.css';

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
