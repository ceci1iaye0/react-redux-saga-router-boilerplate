import { ROOT_ENDPOINTS } from "../constants/api";
import ApiClient from "./ApiClient";
import { URL } from "./url";

export const posts = {
  getAll: () => ApiClient.get(new URL(`${ROOT_ENDPOINTS.posts}`)),

  get: (postId: number) =>
    ApiClient.get(new URL(`${ROOT_ENDPOINTS.posts}/${postId}`)),

  post: (data: any) => ApiClient.post(new URL(`${ROOT_ENDPOINTS.posts}`), data),

  put: (postId: number, data: any) =>
    ApiClient.put(new URL(`${ROOT_ENDPOINTS.posts}/${postId}`), data),

  delete: (postId: number) =>
    ApiClient.get(new URL(`${ROOT_ENDPOINTS.posts}/${postId}`)),
};
