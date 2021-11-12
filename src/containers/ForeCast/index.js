import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import foreCastService from '../../services/foreCastService';

function ForeCast() {
  const cityName = useSelector(state => state.selectedCityName);
  const [foreCast, setForeCast] = useState(null);

  useEffect(() => {
    (async function () {
      if (cityName) {
        const result = await foreCastService.get(cityName);
        if (result && result.status === 200) {
          setForeCast(result.data.forecast.forecastday);
        }
      }
    })();
  }, [cityName]);

  console.log(foreCast)

  return (
    <div style={{ maxWidth: '1024px' }} className='w-full flex justify-around flex-wrap pt-4'>
      {foreCast && foreCast.map((item) => (
        <div
          key={item.date_epoch}
          style={{ minWidth: '248px' }}
          className='border-2 border-solid rounded border-black p-6 h-64 text-center mr-3 ml-3 mb-3 w-1/4'
        >
          <p><strong>Date:</strong> {item.date}</p>
          <div className='mt-4 mb-4'>
            <img className='inline-block m-auto' src={item.day.condition.icon} alt="item.day.condition.text" />
            <p>{item.day.condition.text}</p>
          </div>
          <p><strong>AVG Temp:</strong> {item.day.avgtemp_c} &#8451;</p>
          <p><strong>MAX Temp:</strong> {item.day.maxtemp_c} &#8451;</p>
          <p><strong>MIN Temp:</strong> {item.day.mintemp_c} &#8451;</p>
        </div>
      ))
      }
    </div >
  );
}

export default ForeCast;