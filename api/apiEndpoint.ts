import apiClient from './apiClient';

export const getData = id => {
  console.log(id);
  return apiClient.get(`/${id}`);
};
