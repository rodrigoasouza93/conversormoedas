import axios from 'axios';

import { API_KEY } from '../currency-api-key';

const BASE_URL = 'http://apilayer.net/api/';

export const CONVERTE_MOEDAS = 'CONVERTE_MOEDAS';

export function converteMoedas(converte) {
  const url = `${BASE_URL}/live?access_key=${API_KEY}&source=${converte.de}&currencies=${converte.para}`;

  const request = axios.get(url);

  return {
    type: CONVERTE_MOEDAS,
    payload: request
  }
}