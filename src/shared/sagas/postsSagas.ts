import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  createPost,
  deletePost,
  fetchPost,
  fetchPosts,
  updatePost,
} from "../reducers/postsReducer";
import * as api from "../services/api";

export function* fetchPostsSaga(): any {
  try {
    const response = yield call(api.posts.getAll);

    yield put(fetchPosts.success(response));
  } catch (err) {
    yield put(fetchPosts.failure(err));
  }
}

export function* fetchPostSaga({ payload }: any) {
  const { postId } = payload;

  try {
    const response: Promise<{ [key: string]: any }> = yield call(
      api.posts.get,
      postId
    );

    yield put(fetchPost.success(response));
  } catch (err) {
    yield put(fetchPost.failure(err));
  }
}

export function* createPostSaga({ payload }: any): any {
  const { values } = payload;

  try {
    yield call(api.posts.post, values);

    yield put(createPost.success());
    yield put(fetchPosts.request());
  } catch (err) {
    yield put(createPost.failure(err));
  }
}

export function* updatePostSaga({ payload }: any): any {
  const { postId, values } = payload;

  try {
    const response = yield call(api.posts.put, postId, values);

    yield put(updatePost.success(response));
    yield put(fetchPosts.request());
  } catch (err) {
    yield put(updatePost.failure(err));
  }
}

export function* deletePostSagas({ payload }: any): any {
  const { postId } = payload;

  try {
    yield call(api.posts.delete, postId);

    yield put(deletePost.success());
    yield put(fetchPosts.request());
  } catch (err) {
    yield put(deletePost.failure(err));
  }
}

export default function* postsSagas() {
  yield all([
    takeLatest(fetchPosts.REQUEST, fetchPostsSaga),
    takeLatest(fetchPost.REQUEST, fetchPostSaga),
    takeLatest(createPost.REQUEST, createPostSaga),
    takeLatest(updatePost.REQUEST, updatePostSaga),
    takeLatest(deletePost.REQUEST, deletePostSagas),
  ]);
}
