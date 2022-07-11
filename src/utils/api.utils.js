import axios from 'axios';

export const apiCall = async (
  requestType,
  url,
) => {
 
  if(!requestType || !url) return 
  const requestOptions = {
    method: requestType,
  };
  
  return await axios({
    url,
    ...requestOptions
  })
};