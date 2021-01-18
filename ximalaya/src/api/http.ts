import axios from 'axios';
import Config from 'react-native-config';

// const baseURL = Config.API_URL;
const baseURL = "http://192.168.1.7:8088";
// create an axios instance
const service = axios.create({
  baseURL: baseURL, // api的base_url
  // timeout: 5000, // request timeout
});

service.interceptors.request.use(
  (request) => {
    const formData = {

    };
    request.data = formData;
    return request;
  },
  (error) => {
    console.log('requesterror', error);
  },
);

// respone interceptor
service.interceptors.response.use(
  (response) => {
    if (response.status === 401) {

    }
    return response;
  },
  (error) => {
    console.log('responseerror', error);

  },
);

export default service;