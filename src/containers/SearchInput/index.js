import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../../app';

import Autocomplete from 'react-autocomplete';

import searchService from '../../services/searchService';

function SearchInput() {
  const [cities, setCities] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [inputRef, setInputRef] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const result = await searchService.search();
      setCities(result.data);
      dispatch({ type: actions.SET_LOADING, isLoading: false });
    })();
  }, [dispatch]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      (async function () {
        if (inputRef && inputRef.props && inputRef.props.value === searchValue) {
          const result = await searchService.search(searchValue);
          if (result && result.status === 200) {
            setCities(result.data);
          }
        }
      })();
    }, 500);
    return () => {
      clearTimeout(timerID);
    };
  }, [searchValue, inputRef]);

  function handleChangeSearchInput(event) {
    const value = event.target.value;
    setSearchValue(value);
  }

  function handleSelectSearchInput(value) {
    setSearchValue(value);
    dispatch({ type: actions.SET_CITY_NAME, cityName: value });
  }

  function renderInput(props) {
    return (
      <input
        {...props}
        className='border-2 border-solid rounded border-black p-4 font-mono focus:shadow-sm focus:border-gray-400'
        placeholder='Type City name'
      />
    );
  }

  function renderItem(city, isHighlighted) {
    return (
      <div
        key={city.id}
        className={`p-3 cursor-pointer ${isHighlighted ? 'bg-gray-200' : 'bg-white'}`}
      >
        {city.name}
      </div>
    );
  }

  return (
    <Autocomplete
      renderInput={renderInput}
      getItemValue={(city) => city.name}
      items={cities}
      value={searchValue}
      onChange={handleChangeSearchInput}
      onSelect={handleSelectSearchInput}
      ref={(el) => setInputRef(el)}
      renderItem={renderItem}
    />
  );
}

export default SearchInput;
