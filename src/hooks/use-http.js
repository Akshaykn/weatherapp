import React from 'react';
const axios = require('axios').default;
const useHttp = () => {
  const sendRequest = React.useCallback((requestConfig, applyData) => {
    axios.get(requestConfig.url)
      .then((response) => {
        applyData(response);   
      })
      .catch((errorResponse) => {
        
      })
  }, []);
  return {
    sendRequest,
  }
};

export default useHttp;