import axios, { AxiosResponse } from 'axios';

const sharedAPIForService = (): Promise<AxiosResponse<any, any>> => {
  return axios.post('url/sharedAPIForService');
};

const SharedFeatureService = { sharedAPIForService };

export default SharedFeatureService;
/**
 *
 * util
 *    F- enum ,const,service,model
 *      Files - filename.enum.ts
 */
