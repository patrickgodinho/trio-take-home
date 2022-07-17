import { useQuery } from 'react-query';
import axios from 'axios';
import { RestaurantType } from 'types';

const fetchMenu = async () => {
  const { data } = await axios.get<RestaurantType>('https://mcdonalds.trio.dev/menu');
  return data;
};

export const useMenu = () => useQuery('menu', fetchMenu);
