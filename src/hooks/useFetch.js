import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [lastUrl, setLastUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data === null || url !== lastUrl) {
      setLastUrl(url);
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            throw Error(res.statusText);
          }
          const newData = await res.json();
          setData(newData);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [url]);

  return [data, error, isLoading];
};

export default useFetch;
