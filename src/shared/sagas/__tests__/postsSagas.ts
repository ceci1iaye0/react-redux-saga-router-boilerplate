import { expectSaga } from "redux-saga-test-plan";
import { call, select } from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import {
  createPost,
  deletePost,
  fetchPost,
  fetchPosts,
  selector,
  updatePost,
} from "../../reducers/postsReducer";
import * as api from "../../services/api";
import postsSagas from "../postsSagas";

describe("postsSagas", () => {
  const postId = 1;

  it("Should put success with response on successful fetchPosts", () => {
    const res: any = [];

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.getAll), res],
      ])
      .put(fetchPosts.success(res))
      .dispatch(fetchPosts.request())
      .silentRun();
  });

  it("Should put failure with error on unsuccessful fetchPosts", () => {
    const error = new Error("error text");

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.getAll), throwError(error)],
      ])
      .put(fetchPosts.failure(error))
      .dispatch(fetchPosts.request())
      .silentRun();
  });

  it("Should put success with response on successful fetchPost", () => {
    const res = {};
    const payload = { postId };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.get, payload.postId), res],
      ])
      .put(fetchPost.success(res))
      .dispatch(fetchPost.request(payload))
      .silentRun();
  });

  it("Should put failure with error on unsuccessful fetchPost", () => {
    const error = new Error("error text");
    const payload = { postId };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.get, payload.postId), throwError(error)],
      ])
      .put(fetchPost.failure(error))
      .dispatch(fetchPost.request(payload))
      .silentRun();
  });

  it("Should put success with response on successful createPost", () => {
    const payload = { values: {} };
    const res = {};

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.post, payload.values), res],
      ])
      .put(createPost.success())
      .put(fetchPosts.request())
      .dispatch(createPost.request(payload))
      .silentRun();
  });

  it("Should put failure with response on unsuccessful createPost", () => {
    const error = new Error("error text");

    const payload = { values: {} };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.post, payload.values), throwError(error)],
      ])
      .put(createPost.failure(error))
      .dispatch(createPost.request(payload))
      .silentRun();
  });

  it("Should put success with response on successful updatePost", () => {
    const payload = { postId, values: {} };
    const res = {};

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.put, payload.postId, payload.values), res],
      ])
      .put(updatePost.success(res))
      .put(fetchPosts.request())
      .dispatch(updatePost.request(payload))
      .silentRun();
  });

  it("Should put failure with response on unsuccessful updatePost", () => {
    const error = new Error("error text");

    const payload = { postId, values: {} };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [
          call(api.posts.put, payload.postId, payload.values),
          throwError(error),
        ],
      ])
      .put(updatePost.failure(error))
      .dispatch(updatePost.request(payload))
      .silentRun();
  });

  it("Should put success with response on successful deletePost", () => {
    const payload = { postId };

    const res = {};

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.delete, payload.postId), res],
      ])
      .put(deletePost.success())
      .put(fetchPosts.request())
      .dispatch(deletePost.request(payload))
      .silentRun();
  });

  it("Should put failure with response on unsuccessful deletePost", () => {
    const error = new Error("error text");

    const payload = { postId };

    return expectSaga(postsSagas)
      .provide([
        [select(selector), {}],
        [call(api.posts.delete, payload.postId), throwError(error)],
      ])
      .put(deletePost.failure(error))
      .dispatch(deletePost.request(payload))
      .silentRun();
  });
});
