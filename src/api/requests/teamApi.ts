import { ITeamData } from '../dto/teams';
import { api } from './baseApi';
import { ADD_TEAM, getTeamById, deleteTeamById, UPDATE_TEAM, SEARCH_TEAM } from '../Constants';

// CRUD requests
// Create Team
export async function addTeam(data: ITeamData) {
  const response = await api.post(ADD_TEAM, data);
  return response.data;
}

// Read Teams and Team
export async function getTeam(url: string) {
  const response = await api.get(url);
  return response;
}

export async function getTeamId(id: number) {
  const response = await api.get(getTeamById(id));
  return response;
}
// Update Team
export async function updateTeam(data: ITeamData) {
  const response = await api.put(UPDATE_TEAM, data);
  return response.data;
}

// Delete Team
export async function deleteTeam(id: number) {
  const response = await api.delete(deleteTeamById(id));
  return response;
}

export async function getTeamSearch(name: string, page = 1, size = 6) {
  const response = await api.get(`${SEARCH_TEAM}?Name=${name}&Page=${page}&PageSize=${size}`);
  return response;
}
