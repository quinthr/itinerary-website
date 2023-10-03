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
  let data = await res.json();
  if (!res.ok) {
    //handle errors
    if (res.status === 409 && data.message === 'Username already exists') {
      throw new Error(data.message);
    } else if (
      res.status === 409 &&
      data.message === 'Email already been used'
    ) {
      throw new Error(data.message);
    }
    throw new Error('API error');
  }

  if (json) {
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
