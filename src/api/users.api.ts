import axios, { AxiosResponse } from 'axios';
import { User as UserModel } from '../models/user.model';

const baseUrl = 'http://localhost:3004';

export const getUsers = async () => {
  return axios.get(`${baseUrl}/users`);
}

export const postUsers = async (payload: UserModel): Promise<AxiosResponse<UserModel>> => {
  return axios.post(`${baseUrl}/users`, payload);
}

// postUsers({ id: 'sldkfjsd', firstName: 'test', lastName: 'tests' }).then(response => {
//   // You get intellisense on data returned...
//   response.data;
// })