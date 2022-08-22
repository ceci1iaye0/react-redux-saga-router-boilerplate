import postsReducer, {
  containerId,
  createPost,
  deletePost,
  fetchPost,
  fetchPosts,
  initialState,
  selector,
  updatePost,
} from "../postsReducer";

describe("PostsPage reducer", () => {
  it("Should return initial state by default", () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });

  it("Should set values for isFetchPostsLoading and error on fetchPosts.REQUEST", () => {
    const resultState = postsReducer(
      {
        isFetchPostsLoading: false,
        fetchPostsError: "Error",
      } as any,
      fetchPosts.request()
    );

    expect(resultState).toEqual({
      isFetchPostsLoading: true,
      fetchPostsError: "",
    });
  });

  it("Should set values for postsData and isFetchPostsLoading on fetchPosts.SUCCESS", () => {
    const payload = {};
    const resultState = postsReducer(
      { postsData: [], isFetchPostsLoading: true } as any,
      fetchPosts.success(payload)
    );

    expect(resultState).toEqual({
      postsData: payload,
      isFetchPostsLoading: false,
    });
  });

  it("Should set values for isFetchPostsLoading and fetchPostsError on fetchPosts.FAILURE", () => {
    const payload = "Error";
    const resultState = postsReducer(
      { isFetchPostsLoading: true, fetchPostsError: "" } as any,
      fetchPosts.failure(payload)
    );

    expect(resultState).toEqual({
      isFetchPostsLoading: false,
      fetchPostsError: payload,
    });
  });

  it("Should set values for isFetchPostLoading and fetchPostError on fetchPost.REQUEST", () => {
    const resultState = postsReducer(
      { isFetchPostLoading: false, fetchPostError: "Error" } as any,
      fetchPost.request()
    );

    expect(resultState).toEqual({
      isFetchPostLoading: true,
      fetchPostError: "",
    });
  });

  it("Should set values for postData and isFetchPostLoading on fetchPost.SUCCESS", () => {
    const payload = {};
    const resultState = postsReducer(
      { postData: {}, isFetchPostLoading: true } as any,
      fetchPost.success(payload)
    );

    expect(resultState).toEqual({
      postData: payload,
      isFetchPostLoading: false,
    });
  });

  it("Should set values for isFetchPostLoading and fetchPostError on fetchPost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsReducer(
      { isFetchPostLoading: true, fetchPostError: "" } as any,
      fetchPost.failure(payload)
    );

    expect(resultState).toEqual({
      isFetchPostLoading: false,
      fetchPostError: payload,
    });
  });

  it("Should set values for isCreatePostLoading and createPostError on createPost.REQUEST", () => {
    const resultState = postsReducer(
      { isCreatePostLoading: false, createPostError: "Error" } as any,
      createPost.request()
    );

    expect(resultState).toEqual({
      isCreatePostLoading: true,
      createPostError: "",
    });
  });

  it("Should set value for isCreatePostLoading on createPost.SUCCESS", () => {
    const resultState = postsReducer(
      { isCreatePostLoading: true } as any,
      createPost.success()
    );

    expect(resultState).toEqual({ isCreatePostLoading: false });
  });

  it("Should set values for isCreatePostLoading and createPostError on createPost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsReducer(
      { isCreatePostLoading: true, createPostError: "" } as any,
      createPost.failure(payload)
    );

    expect(resultState).toEqual({
      isCreatePostLoading: false,
      createPostError: payload,
    });
  });

  it("Should set values for isUpdatePostLoading and updatePostError on updatePost.REQUEST", () => {
    const resultState = postsReducer(
      { isUpdatePostLoading: false, updatePostError: "Error" } as any,
      updatePost.request()
    );

    expect(resultState).toEqual({
      isUpdatePostLoading: true,
      updatePostError: "",
    });
  });

  it("Should set value for isUpdatePostLoading on updatePost.SUCCESS", () => {
    const resultState = postsReducer(
      { isUpdatePostLoading: true } as any,
      updatePost.success()
    );

    expect(resultState).toEqual({ isUpdatePostLoading: false });
  });

  it("Should set values for isUpdatePostLoading and updatePostError on updatePost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsReducer(
      { isUpdatePostLoading: true, updatePostError: "" } as any,
      updatePost.failure(payload)
    );

    expect(resultState).toEqual({
      isUpdatePostLoading: false,
      updatePostError: payload,
    });
  });

  it("Should set values for isDeletePostLoading and deletePostError on deletePost.REQUEST", () => {
    const resultState = postsReducer(
      { isDeletePostLoading: false, deletePostError: "Error" } as any,
      deletePost.request()
    );

    expect(resultState).toEqual({
      isDeletePostLoading: true,
      deletePostError: "",
    });
  });

  it("Should set value for isDeletePostLoading on deletePost.SUCCESS", () => {
    const resultState = postsReducer(
      { isDeletePostLoading: true } as any,
      deletePost.success()
    );

    expect(resultState).toEqual({ isDeletePostLoading: false });
  });

  it("Should set values for isDeletePostLoading and deletePostError on deletePost.FAILURE", () => {
    const payload = "Error";
    const resultState = postsReducer(
      { isDeletePostLoading: true, deletePostError: "" } as any,
      deletePost.failure(payload)
    );

    expect(resultState).toEqual({
      isDeletePostLoading: false,
      deletePostError: payload,
    });
  });

  it("Selector should return correct result", () => {
    const text = "test";
    const selectedData = selector({ [containerId]: text });

    expect(selectedData).toEqual(text);
  });
});
