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
    let data = await res.json();
    throw new Error(data.message);
  }

  if (json) {
    let data = await res.json();
    return data.data;
  }
};

export const signup = (data: any) => {
  return fetcher({
    url: 'https://itinerary-api-production.up.railway.app/user',
    method: 'post',
    body: data,
  });
};

export const signin = (data: any) => {
  return fetcher({
    url: 'https://itinerary-api-production.up.railway.app/signin',
    method: 'post',
    body: data,
  });
};

export const forgetPassword = (data: any) => {
  return fetcher({
    url: 'https://itinerary-api-production.up.railway.app/forgetPassword',
    method: 'post',
    body: data,
  });
};
