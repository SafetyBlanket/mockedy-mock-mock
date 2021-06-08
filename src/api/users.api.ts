import axios, { AxiosResponse } from 'axios';
import { UserInterface } from '../models/user.model';

const baseUrl = 'http://localhost:3004';
const usersUrl = `${baseUrl}/users`

export const getUsers = async (): Promise<AxiosResponse<UserInterface>> => {
  return axios.get(usersUrl);
}

export const postUsers = async (payload: UserInterface): Promise<AxiosResponse<UserInterface>> => {
  return axios.post(usersUrl, payload);
}

export const deleteUsers = async (id: string) => {
  return axios.delete(`${usersUrl}?id=${id}`);
}