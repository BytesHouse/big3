// Libraries and hooks
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTeamData } from '../../core/redux/store/reducers/teams/teamsSlice';
// Components import
import HamburgerMenu from '../../ui/HamburgerMenu/HamburgerMenu';
import Navigation from '../../ui/Navigation/Navigation';
// CSS
import style from './ApplicationPage.module.css';

export const ApplicationPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeamData('Team/GetTeams'));
  }, []);
  return (
    <div className={style.container}>
      <Navigation />
      <div className={style.wrapper}>
        <HamburgerMenu />
        <Outlet />
      </div>
    </div>
  );
};
