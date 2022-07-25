import { IPlayerData } from '../dto/player';
import { api } from './baseApi';
import {
  GET_POSITION,
  ADD_PLAYER,
  getPlayerById,
  deletePlayerById,
  UPDATE_PLAYER,
  SEARCH_PLAYER,
} from '../Constants.ts';

// CRUD Player
// Create Player
export async function addPlayer(data: IPlayerData) {
  const response = await api.post(ADD_PLAYER, data);

  return response.data;
}

// Read Players and Player
export async function getPlayers(url: string) {
  const response = await api.get(url);

  return response;
}

export async function getPlayerId(id: number) {
  const response = await api.get(getPlayerById(id));

  return response;
}

export async function getPosition() {
  const response = await api.get(GET_POSITION);

  return response.data;
}

// Update Player
export async function updatePlayer(data: IPlayerData) {
  const response = await api.put(UPDATE_PLAYER, data);

  return response.data;
}

// Delete Player
export async function deletePlayer(id: number) {
  const response = await api.delete(deletePlayerById(id));

  return response;
}

export async function getPlayerSearch(name: string, page = 1, size = 6) {
  const response = await api.get(`${SEARCH_PLAYER}?Name=${name}&Page=${page}&PageSize=${size}`);

  return response;
}
