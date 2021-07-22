import axios from '../lib/axios';

export const API_HEALTHCHECK = () => {
  axios.get('/');
};

export const ROOM_CREATE = async () => {
  return axios.post('/rooms');
};

export const ROOM_FETCH = async (id: string) => {
  return axios.get(`/rooms/${id}`);
};

export const MESSAGE_POST = async (data : any, id : string) => {
  return axios.post(`/rooms/${id}`, data);
};
