import axios from 'axios';

const BASEURL = 'https://swapi.dev/api/';

const sendRequest = async (
  url = '',
  data = {},
  headers = { 'Content-Type': 'application/json' }
) => {
  const config = {
    method: 'GET',
    url: BASEURL + url,
    data: data,
    headers: headers,
  };
  const response = await axios(config).catch((error) => {
    console.error('[ApiService.js] ', error);
  });
  return response;
};

export { sendRequest };
