import axios from 'axios'

export const suitpay = axios.create({
  baseURL: 'https://sandbox.ws.suitpay.app',
  timeout: 10000,
  headers: {'ci': 'testesandbox_1687443996536',
    'cs': '5b7d6ed3407bc8c7efd45ac9d4c277004145afb96752e1252c2082d3211fe901177e09493c0d4f57b650d2b2fc1b062d'}
});