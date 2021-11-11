import axios from 'axios';

const BASE_URL = 'http://api.weatherapi.com/v1';
const KEY = '57408dc548094a5f838202604211111';

const instance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  params: {
    key: KEY,
  },
});

const apiService = {
  customGet(url, param) {
    return instance.get(url, {
      params: {
        q: param,
      },
    });
  }
}

export default apiService;