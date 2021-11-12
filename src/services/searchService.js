import apiService from './apiService';

const SEARCH_ENDPOINT = '/search.json';

const searchService = {
  search(value) {
    const newValue = value ? value : ' ';

    return apiService.customGet(SEARCH_ENDPOINT, { q: newValue });
  }
}

export default searchService;
