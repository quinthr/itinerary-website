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
    throw new Error(data.message);
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
