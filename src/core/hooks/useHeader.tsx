import { useEffect, useState } from 'react';

const useHeader = () => {
  const [userName, setUserName] = useState<any>(null);
  const [isLoading, setLoader] = useState<boolean>(true);

  const getUsername = () => {
    setLoader(true);
    setUserName('User Name');
  };

  useEffect(() => {
    getUsername();
  }, []);

  return { userName, isLoading };
};

export default useHeader;
