import axios from 'axios';

const SendFullUrlRequest = async (
  url = '',
  data = {},
  headers = { 'Content-Type': 'application/json' }
) => {
  const config = {
    method: 'GET',
    url: url,
    data: data,
    headers: headers,
  };
  const response = await axios(config).catch((error) => {
    console.error('[ApiService.js] ', error);
  });
  return response;
};

export { SendFullUrlRequest };
