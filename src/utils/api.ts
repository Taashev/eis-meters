import { ResponseAddressType } from '../types/address';
import { MetersApiResponseType } from '../types/meter';
import { BASE_URL } from './constants';
import { setQueryParams } from './setRequsetParams';

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

export async function apiGetMeters(
  offset?: number,
  limit?: number
): Promise<MetersApiResponseType> {
  let url = setQueryParams(BASE_URL + '/api/v4/test/meters/', {
    offset,
    limit,
  });

  return await fetch(url).then(checkResponse);
}

export async function apiGetAddressByIds(
  queryAddressIds: string
): Promise<ResponseAddressType | null> {
  const url = setQueryParams(BASE_URL + '/api/v4/test/areas/', [
    queryAddressIds,
  ]);

  return await fetch(url).then(checkResponse);
}

export async function apiDeleteMeters(id: string) {
  return await fetch(BASE_URL + `/api/v4/test/meters/${id}/`, {
    method: 'DELETE',
  }).then(checkResponse);
}
