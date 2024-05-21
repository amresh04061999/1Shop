import { useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import environment from 'environments/environment';

function Interceptor() {
  // We can set the default url also
  axios.defaults.baseURL = environment.baseUrl;

  axios.interceptors.request.use(
    (req: any) => {
      return req;
    },
    () => {}
  );

  const axiosResponseInterceptor = axios.interceptors.response.use(
    (res) => {
      const { status } = res as AxiosResponse;
      switch (status) {
        case 200:
          return Promise.resolve(res?.data);
        case 204:
          return Promise.resolve(res?.data);
        default:
          return Promise.resolve(res);
      }
    },
    async (error: AxiosError<any>) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.response.eject(axiosResponseInterceptor);
    };
  });
  return null;
}

export default Interceptor;
