import { createStore } from 'redux';

export const actions = {
  SET_LOADING: 'SET_LOADING',
  SET_CITY_NAME: 'SET_CITY_NAME',
};

const initialState = {
  isLoading: true,
  selectedCityName: '',
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    case actions.SET_CITY_NAME:
      return { ...state, selectedCityName: action.cityName };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);


export default store;