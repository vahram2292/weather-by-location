import React from 'react';

import { useSelector } from 'react-redux';

import Loader from '../../components/Loader'
import SearchInput from '../SearchInput';
import ForeCast from '../ForeCast';

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div className='flex justify-start items-center p-10 min-h-screen min-w-full font-mono flex-col'>
      <SearchInput className={isLoading ? 'hidden' : ''} />
      {isLoading && <Loader />}
      {!isLoading && <ForeCast />}
    </div>
  );
}

export default App;
