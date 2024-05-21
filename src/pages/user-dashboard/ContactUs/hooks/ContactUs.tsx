import { useEffect, useState } from 'react';
import Feature1Service from '../utility/services/home.service';

const useFeatureOne = () => {
  const [featureOneList, setFeatureOneList] = useState<any[]>([]);
  const [isLoading, setLoader] = useState<boolean>(true);
  const [first, setfirst] = useState<any>(null);
  const getFeatureOneList = () => {
    setLoader(true);

    Feature1Service.feature1List()
      .then((res) => {
        if (res.status === 200) {
          setFeatureOneList(res?.data?.data);
        }
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getFeatureOneList();
  }, []);

  return { isLoading, featureOneList, first };
};

export default useFeatureOne;
