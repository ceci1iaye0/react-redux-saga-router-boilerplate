export type TGetURLWithQuery = {
  location: any;
  queryName: any;
  queryValue: any;
};

export type TGetURLWithQueryParam = {
  search: any;
  queryName: any;
  queryValue: any;
};

export type TURLs = {
  local?: string;
  dev?: string;
  sit?: string;
  uat?: string;
  staging?: string;
  prod?: string;
};
