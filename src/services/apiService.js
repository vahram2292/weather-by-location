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
  customGet(url, params) {
    return instance.get(url, {
      params: {
        ...params,
      },
    }).catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(`Error of status ${error.response.status}: ${error.response.data.error.message}`);
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }
}

export default apiService;