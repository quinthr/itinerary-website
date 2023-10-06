interface FetcherParams {
  url: string;
  method: string;
  body?: Record<string, any> | string;
  json?: boolean;
}

export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: FetcherParams): Promise<any> => {
  console.log('FETCHER CALLED');
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  console.log(res);
  if (!res.ok) {
    let data = await res.json();
    throw new Error(data.message);
  }

  if (json) {
    let data = await res.json();
    return data.data;
  }
};

export const signup = (data) => {
  console.log(data);
  return fetcher({
    url: 'http://localhost:3002/user',
    method: 'post',
    body: data,
  });
};

export const signin = (data) => {
  console.log(data);
  console.log('API CALLED');
  return fetcher({
    url: 'http://localhost:3002/signin',
    method: 'post',
    body: data,
  });
};
