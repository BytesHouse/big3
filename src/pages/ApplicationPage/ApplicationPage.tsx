// Libraries and hooks
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeamData } from '../../core/redux/store/reducers/teams/teamsSlice';
// Components import
import HamburgerMenu from '../../ui/HamburgerMenu/HamburgerMenu';
import Navigation from '../../ui/Navigation/Navigation';
import DisplayDashboard from './components/DisplayDashboard/DisplayDashboard';
import Boombox from './components/Boombox/Boombox';
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
        <DisplayDashboard />
        <Boombox />
      </div>
    </div>
  );
};
