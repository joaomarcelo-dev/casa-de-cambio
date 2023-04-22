import axios from 'axios';

const BASE_URL = 'https://api.exchangerate.host/latest?base=';

export function getDataCoins(coin) {
  return axios.get(`${BASE_URL}${coin}`);
}
