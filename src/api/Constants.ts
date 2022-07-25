// baseUrl
export const BASE_URL = 'http://dev.trainee.dex-it.ru/api/';

// SignIn
export const SIGN_IN = 'Auth/SignIn';

// SignUp
export const SIGN_UP = 'auth/AuthSignUp';

// SaveImageAPI
export const SAVE_IMAGE = 'Image/SaveImage';

// TEAM
export const ADD_TEAM = 'Team/Add';
export const UPDATE_TEAM = 'Team/Update';
export const SEARCH_TEAM = 'Team/GetTeams';
export const getTeamById = (id: number) => `Team/Get?id=${id}`;
export const deleteTeamById = (id: number) => `Team/Delete?id=${id}`;

// PLAYER
export const ADD_PLAYER = 'Player/Add';
export const UPDATE_PLAYER = 'Player/Update';
export const GET_POSITION = 'Player/GetPositions';
export const SEARCH_PLAYER = 'Player/GetPlayers';
export const getPlayerById = (id: number) => `Player/Get?id=${id}`;
export const deletePlayerById = (id: number) => `Player/Delete?id=${id}`;

// CHANGE_USER
export const CHANGE_PROFILE = 'Auth/Change';

// DELETE_IMAGE

export const deleteImage = (file: string) => `image/DeleteImage?${file}`;
