export function setQueryParams(
  url: string,
  params: Record<string, string | number | undefined> | Array<string>
) {
  if (Array.isArray(params)) {
    url += serializeArrayParams(params);
  } else {
    url += serializeObjectParams(params);
  }

  return url;
}

function serializeObjectParams(
  params: Record<string, string | number | undefined>
) {
  let resultParams = '';

  const paramsKeyValue = Object.entries(params).filter(
    ([key, value]) => value !== undefined
  );

  if (!paramsKeyValue.length) {
    return resultParams;
  }

  resultParams += '?';

  for (let i = 0; i < paramsKeyValue.length; i++) {
    const [key, value] = paramsKeyValue[i];

    if (i + 1 >= paramsKeyValue.length) {
      resultParams += `${key}=${value}`;
    } else {
      resultParams += `${key}=${value}&`;
    }
  }

  return resultParams;
}

function serializeArrayParams(params: Array<string>): string {
  let resultParams = '';

  if (!params.length) {
    return resultParams;
  }

  resultParams += '?' + params.join('&');

  return resultParams;
}
