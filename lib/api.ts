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
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    //handle errors
    throw new Error('API error');
  }

  if (json) {
    const data = await res.json();
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
