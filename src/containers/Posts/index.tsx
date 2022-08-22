import { useSelector } from "react-redux";

import LoadingAndErrorHandling from "../../shared/components/LoadingAndErrorHandling";
import { selector } from "../../shared/reducers/postsReducer";
import useCustomEffects from "./useCustomEffects";

const Posts = () => {
  useCustomEffects();

  const { postsData, isFetchPostsLoading, fetchPostsError } =
    useSelector(selector);

  return (
    <LoadingAndErrorHandling
      isLoading={isFetchPostsLoading}
      errorMessage={fetchPostsError}
    >
      <header>Posts</header>
      {postsData?.map((post: any) => (
        <span key={post.id}>{post.title}</span>
      ))}
    </LoadingAndErrorHandling>
  );
};

export default Posts;
