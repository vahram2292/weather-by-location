import apiService from './apiService';

const FORECAST_ENDPOINT = '/forecast.json';

const foreCastService = {
  get(value) {
    return apiService.customGet(FORECAST_ENDPOINT, { q: value, days: 3 });
  }
}

export default foreCastService;
