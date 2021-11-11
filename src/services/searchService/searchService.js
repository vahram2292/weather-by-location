import apiService from '../apiService';

const SEARCH_ENDPOINT = '/search.json';

const searchService = {
  search(value) {
    return apiService.customGet(SEARCH_ENDPOINT, value);
  }
}

export default searchService;
