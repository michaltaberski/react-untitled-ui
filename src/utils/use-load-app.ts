import { useEffect, useState } from 'react';
import { loadIcons } from '../components/icon';

export const useLoadApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    Promise.all([loadIcons()]).then(() => setIsLoaded(true));
  }, []);
  return isLoaded;
};
