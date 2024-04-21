import { useEffect, useState } from 'react';
import { loadIconsPromise } from '../components/icon';
import { loadRoutesPromise } from './file-based-routing';

export const useLoadApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    Promise.all([loadIconsPromise, loadRoutesPromise]).then(() =>
      setIsLoaded(true),
    );
  }, []);
  return isLoaded;
};
