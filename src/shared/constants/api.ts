import { getBaseURL } from "../utils/helpers";
import { TURLs } from "./types";

const FE_URLS: TURLs = {
  local: "http://localhost:3000",
};

const BE_URLS: TURLs = {
  local: "https://jsonplaceholder.typicode.com",
};

export const BASE_URL = getBaseURL(window.location.origin, FE_URLS, BE_URLS);

export const ROOT_ENDPOINTS = {
  posts: `${BASE_URL}/posts`,
};
