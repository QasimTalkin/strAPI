import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const dataJson = await response.json();

        setData(dataJson.data);
        setLoading(false);
      }
      catch(error) {
      setError(error);
      setLoading(false);
     }
    };
    fetchData();
  }, [url]);
  return {data, error, loading};
};

export default useFetch;