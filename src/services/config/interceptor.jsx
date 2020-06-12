import axios from 'axios';

export const interceptor = axios.interceptors.request.use(async (config) => {            
    
    config.headers['accept'] = 'application/json';
    config.headers['content-type'] = 'application/json';
    config.baseURL = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/";
    
    return config;       
  }, (error) => {    
    return Promise.reject(error);
});