import axios from 'axios'

export const suitpay = axios.create({
  baseURL: 'https://ws.suitpay.app',
  timeout: 10000,
  headers: {'ci': 'produtor_1716234502718',
    'cs': 'c5b73ea25f477f59712e0c70344e0eabd795f3f309d4ea8ef3964fdb66f0a27004ad95147e5f45a29749f51e85e9dad6'}
});