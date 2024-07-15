import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://clicklucro.000webhostapp.com/',
  timeout: 10000,
});