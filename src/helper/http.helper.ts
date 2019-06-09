import { AxiosRequestConfig } from 'axios';

export const DefaultConfigAxios: AxiosRequestConfig = {
    method: 'post',
    baseURL: 'https://sample-mock-api.herokuapp.com',
    // baseURL: 'http://localhost:8080',
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    responseType: 'json'
};
