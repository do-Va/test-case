import { useState, useEffect } from 'react';
import { paginate } from './helper';

const BASE_URL = 'https://dummyapi.io/data/v1/user?limit=50';
const APP_ID = '61714d6ed5ce29502583c7de';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/user`, {
      headers: { 'app-id': APP_ID },
    });
    const data = await response.json();

    setData(paginate(data.data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, data };
};
