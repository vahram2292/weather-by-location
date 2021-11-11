import React, { useEffect } from 'react';

import foreCastService from '../../services/foreCastService';

function ForeCast() {
  useEffect(() => {
    (async function () {
      const resp = await foreCastService.get('yerevan');
      console.log(resp.data);
    })();
  }, []);

  return (
    <div>Forecast</div>
  );
}

export default ForeCast;