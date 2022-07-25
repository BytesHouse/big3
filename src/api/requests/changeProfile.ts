import { CHANGE_PROFILE } from '../Constants.ts';
import { api } from './baseApi';

export async function changeProfile(data: any) {
  const response = await api.post(CHANGE_PROFILE, data);

  return response.data;
}
