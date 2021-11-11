import React, { useEffect, useState } from 'react';

import Autocomplete from 'react-autocomplete';

import searchService from '../../services/searchService';

function SearchInput() {
  const [cities, setCities] = useState([]);
  const [searchValue, setSearchValue] = useState(' ');
  const [inputRef, setInputRef] = useState(null);

  useEffect(() => {
    (async function () {
      const result = await searchService.search(' ');
      setCities(result.data);
    })();
  }, []);

  useEffect(() => {
    const timerID = setTimeout(() => {
      (async function () {
        if (inputRef && inputRef.props && inputRef.props.value === searchValue) {
          const result = await searchService.search(searchValue);
          setCities(result.data);
        }
      })();
    }, 500);
    return () => {
      clearTimeout(timerID);
    };
  }, [searchValue, inputRef]);

  function handleSearchInput(event) {
    const value = event.target.value;

    if (value && value !== '') {
      setSearchValue(value);
    } else {
      setSearchValue(' ');
    }
  }

  return (
    <Autocomplete
      getItemValue={(city) => city.name}
      items={cities}
      value={searchValue}
      onChange={handleSearchInput}
      onSelect={(value) => setSearchValue(value)}
      ref={(el) => setInputRef(el)}
      renderItem={(city, isHighlighted) =>
        <div key={city.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
          {city.name}
        </div>
      }
    />
  );
}

export default SearchInput;
