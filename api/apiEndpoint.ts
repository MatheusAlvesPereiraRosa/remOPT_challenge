import apiClient from './apiClient';
import {AxiosResponse} from 'axios';

//informando endpoint para fazer requisição para API
export const getData = (id: string): Promise<AxiosResponse<any, any>> => {
  return apiClient.get(`/${id}`);
};
