import PostsReducer, { containerId as PostsReducerId } from "./postsReducer";

export const reducers = {
  [PostsReducerId]: PostsReducer,
};
