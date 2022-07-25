import { api } from './baseApi';
import { deleteImage } from '../Constants';

export async function deleteimage(fileName: string) {
  const response = await api.delete(deleteImage(fileName));

  return response;
}
