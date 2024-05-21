import axios, { AxiosResponse } from 'axios';
import { ILoginReq } from '../models/login.model';

const loginUser = (
  credentialValues: ILoginReq
): Promise<AxiosResponse<any, any>> => {
  return axios.post('url/Login', credentialValues);
};
const getPreLoginToken = (): Promise<AxiosResponse<any, any>> => {
  return axios.get('url');
};
const loginService = { loginUser, getPreLoginToken };
export default loginService;
