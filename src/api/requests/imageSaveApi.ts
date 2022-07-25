import axios from 'axios';
import { BASE_URL, SAVE_IMAGE } from '../Constants';

const link = BASE_URL + SAVE_IMAGE;

export function SaveImageApi(file: string) {
  const formData = new FormData();
  formData.append('file', file);
  return axios
    .post(link, formData, {
      headers: {
        file: '@emptyPlayers.jpg',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      if (!response) {
        throw new Error(response);
      }
      return response;
    })
    .then((response) => response)
    .then((data) => data.data);
}
