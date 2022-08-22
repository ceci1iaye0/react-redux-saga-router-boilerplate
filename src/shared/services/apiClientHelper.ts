import { isString } from "lodash";

export const isJsonContentType = (type: string | string[] | null) =>
  type && type.indexOf("json") >= 0;

export const isBlobContentType = (type: string | string[] | null) =>
  type && (type.indexOf("pdf") >= 0 || type.indexOf("image") >= 0);

export const getHeaders = () => {
  // Modify this in accordance to how token is retrieved
  const token = "123";

  return new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
};

export const modifyHeaders = (options: any, currentHeaders: any) => {
  let extraOptions = {};
  if (options) {
    const { headers, ...restOptions } = options;
    extraOptions = restOptions;
    for (const header in headers) {
      currentHeaders.append(header, headers[header]);
    }
  }
  return extraOptions;
};

export const getPromiseResponse = (response: any, type: any) => {
  if (isJsonContentType(type)) return response.json();
  if (isBlobContentType(type)) return response.blob();
  return response.text();
};

export const updateBodyOrHeader = (body: any, headers: any) => {
  if (body && body instanceof FormData) {
    headers.delete("Content-Type");
  } else if (!isString(body)) {
    return JSON.stringify(body);
  }
  return body;
};
