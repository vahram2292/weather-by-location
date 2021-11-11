import React from 'react';

import SearchInput from '../../components/SearchInput';
import ForeCast from '../../components/ForeCast';

function App() {
  // const [isLoading, setIsLoading] = useState(null);


  // if (!isLoading) return <p>Loading...</p>;

  return (
    <>
      <SearchInput />
      <ForeCast />
    </>
  );
}

export default App;
