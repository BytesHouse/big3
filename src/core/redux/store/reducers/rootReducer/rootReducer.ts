import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import { AuthReducer } from '../auth/authSlice';
import { IRootState } from './state';
import { teamsReducer } from '../teams/teamsSlice';
import { teamDataReducer } from '../team/teamSlice';
import { playersReducer } from '../players/playersSlice';
import { playerReducer } from '../player/playerSlice';
import { dashboardReducer } from '../dashboard/dashboardSlice';

export const rootReducer = combineReducers<IRootState>({
  router: routerReducer,
  auth: AuthReducer as any,
  teams: teamsReducer as any,
  players: playersReducer as any,
  getTeamInfo: teamDataReducer as any,
  getPlayerInfo: playerReducer as any,
  dashboard: dashboardReducer as any,
});
