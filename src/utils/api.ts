import { AddressType } from '../types/address';
import { MeterType } from '../types/meter';
import { BASE_URL, LIMIT } from './constants';

type ResponseMeterType = {
  count: number;
  next: string;
  previous: string;
  results: Array<MeterType>;
};

type ResponseAddressType = {
  count: number;
  next: string;
  previous: string;
  results: Array<AddressType>;
};

async function checkResponse(response: Response) {
  const contentType = response.headers.get('Content-Type');

  if (response.ok) {
    if (contentType === 'application/json') {
      return await response.json();
    } else {
      return await response.text();
    }
  }

  // Если ответ не успешен, пытаемся распарсить его как JSON
  try {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка сервера');
  } catch (e) {
    // Если парсинг JSON не удался, возвращаем текст ошибки
    const errorText = await response.text();
    throw new Error(errorText || 'Неизвестная ошибка сервера');
  }
}

export async function getMeters(
  offset: number,
  limit: number = LIMIT
): Promise<ResponseMeterType> {
  return await fetch(
    BASE_URL +
      '/api/v4/test/meters/' +
      '?' +
      `limit=${limit}` +
      `&offset=${offset}`
  ).then(checkResponse);
}

export async function getAddresses(
  queryAddressIds: string
): Promise<ResponseAddressType | null> {
  if (queryAddressIds === '') {
    return null;
  }

  return await fetch(
    BASE_URL + '/api/v4/test/areas/' + `?${queryAddressIds}`
  ).then(checkResponse);
}

export async function deleteMeters(id: string) {
  return await fetch(BASE_URL + `/api/v4/test/meters/${id}/`, {
    method: 'DELETE',
  }).then(checkResponse);
}
