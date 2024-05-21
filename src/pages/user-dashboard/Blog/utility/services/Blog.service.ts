import axios, { AxiosResponse } from 'axios';

const feature1List = (): Promise<AxiosResponse<any, any>> => {
  return axios.post('url/feature1list');
};

const Feature1Service = { feature1List };

export default Feature1Service;
