import { transform } from "lodash";

import { TGetURLWithQuery } from "../constants/types";

export class URL {
  URL = "";

  PARAMS: any;

  constructor(URL: string, PARAMS?: any) {
    this.URL = URL || "";
    this.PARAMS = PARAMS;
  }

  addParams(PARAMS: any) {
    Object.assign(this.PARAMS, PARAMS);
  }

  toString() {
    let paramsStr = this.PARAMS ? "?" : "";

    paramsStr += transform(
      this.PARAMS,
      (result: any, value: any, key: string) => {
        result.push(`${key}=${value}`);
      },
      []
    ).join("&");

    return this.URL + paramsStr;
  }
}

export const getURLWithQuery = ({
  location,
  queryName,
  queryValue,
}: TGetURLWithQuery) => {
  const { pathname, search } = location;
  const PARAMS = new URLSearchParams(search.slice(1));

  if (PARAMS.has(queryName)) {
    PARAMS.set(queryName, queryValue);
  } else {
    PARAMS.append(queryName, queryValue);
  }

  return `${pathname}?${decodeURIComponent(PARAMS.toString())}`;
};
