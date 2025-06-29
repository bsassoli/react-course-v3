import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        
        const fetchedData = await resp.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Fetch error:', error);
        setIsError(true);

      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return { isLoading, isError, data };
};

export default useFetch;