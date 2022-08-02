import { IAuth } from '../../../../../api/dto/auth';
import { IPlayerData } from '../../../../../api/dto/player';
import { ITeamData } from '../../../../../api/dto/teams';

export interface IRootState {
  router: any;
  auth: IAuth;
  teams: ITeamData;
  players: IPlayerData;
  getTeamInfo: ITeamData;
  getPlayerInfo: IPlayerData;
  dashboard: any;
}
