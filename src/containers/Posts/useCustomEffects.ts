import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPosts } from "../../shared/reducers/postsReducer";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts.request());
    // dispatch(fetchPost.request({ postId: 1 }));
  }, [dispatch]);
};
