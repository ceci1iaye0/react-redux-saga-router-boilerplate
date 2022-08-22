import produce from "immer";

import AsyncAction from "../services/AsyncAction";

export const containerId = "PostsReducer";
export const fetchPosts = new AsyncAction(`${containerId}/FETCH_POSTS`);
export const fetchPost = new AsyncAction(`${containerId}/FETCH_POST`);
export const createPost = new AsyncAction(`${containerId}/CREATE_POST`);
export const updatePost = new AsyncAction(`${containerId}/UPDATE_POST`);
export const deletePost = new AsyncAction(`${containerId}/DELETE_POST`);

export const selector = (state: { [k: string]: any }) => state[containerId];

export const initialState: {
  postsData: any[];
  isFetchPostsLoading: boolean;
  fetchPostsError: string;

  postData: { [key: string]: any };
  isFetchPostLoading: boolean;
  fetchPostError: string;

  isCreatePostLoading: boolean;
  createPostError: string;

  isUpdatePostLoading: boolean;
  updatePostError: string;

  isDeletePostLoading: boolean;
  deletePostError: string;
} = {
  postsData: [],
  isFetchPostsLoading: false,
  fetchPostsError: "",

  postData: {},
  isFetchPostLoading: false,
  fetchPostError: "",

  isCreatePostLoading: false,
  createPostError: "",

  isUpdatePostLoading: false,
  updatePostError: "",

  isDeletePostLoading: false,
  deletePostError: "",
};

export default produce((draft, { type, payload }) => {
  switch (type) {
    case fetchPosts.REQUEST:
      draft.isFetchPostsLoading = true;
      draft.fetchPostsError = "";
      break;
    case fetchPosts.SUCCESS:
      draft.postsData = payload;
      draft.isFetchPostsLoading = false;
      break;
    case fetchPosts.FAILURE:
      draft.isFetchPostsLoading = false;
      draft.fetchPostsError = payload;
      break;

    case fetchPost.REQUEST:
      draft.isFetchPostLoading = true;
      draft.fetchPostError = "";
      break;
    case fetchPost.SUCCESS:
      draft.postData = payload;
      draft.isFetchPostLoading = false;
      break;
    case fetchPost.FAILURE:
      draft.isFetchPostLoading = false;
      draft.fetchPostError = payload;
      break;

    case createPost.REQUEST:
      draft.isCreatePostLoading = true;
      draft.createPostError = "";
      break;
    case createPost.SUCCESS:
      draft.isCreatePostLoading = false;
      break;
    case createPost.FAILURE:
      draft.isCreatePostLoading = false;
      draft.createPostError = payload;
      break;

    case updatePost.REQUEST:
      draft.isUpdatePostLoading = true;
      draft.updatePostError = "";
      break;
    case updatePost.SUCCESS:
      draft.postData = payload;
      draft.isUpdatePostLoading = false;
      break;
    case updatePost.FAILURE:
      draft.isUpdatePostLoading = false;
      draft.updatePostError = payload;
      break;

    case deletePost.REQUEST:
      draft.isDeletePostLoading = true;
      draft.deletePostError = "";
      break;
    case deletePost.SUCCESS:
      draft.isDeletePostLoading = false;
      break;
    case deletePost.FAILURE:
      draft.isDeletePostLoading = false;
      draft.deletePostError = payload;
      break;

    default:
  }
}, initialState);
