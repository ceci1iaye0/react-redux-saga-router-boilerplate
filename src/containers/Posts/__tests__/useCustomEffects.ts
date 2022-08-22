import { renderHook } from "@testing-library/react";
import mockReactRedux from "mock-react-redux";

import { fetchPosts } from "../../../shared/reducers/postsReducer";
import useCustomEffects from "../useCustomEffects";

describe("useCustomEffects", () => {
  it("Should dispatch fetchPosts", () => {
    const { dispatch } = mockReactRedux();

    renderHook(() => useCustomEffects());

    expect(dispatch).toHaveBeenCalledWith(fetchPosts.request());
  });
});
