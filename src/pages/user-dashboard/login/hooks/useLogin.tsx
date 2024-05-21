import { useEffect, useState } from 'react';
import loginService from '../utility/services/login.service';


const useLogin = () => {
  const [authData, setAuthData] = useState<any>(null);
  const [isLoading, setLoader] = useState<boolean>(true);

  const getPreLoginToken = () => {
    loginService.getPreLoginToken().then((res) => {
      if (res.status === 200) {
        setAuthData(res?.data?.data);
      }
    });
  };
  const loginUser = (values: ILoginReq) => {
    setLoader(true);
    setAuthData(values);
    loginService
      .loginUser(values)
      .then((res) => {
        if (res.status === 200) {
          setAuthData(res?.data?.data);
        }
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getPreLoginToken();
  }, []);

  return { authData, isLoading, getPreLoginToken, loginUser };
};

export default useLogin;
