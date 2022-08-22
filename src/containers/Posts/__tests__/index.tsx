import { render, screen } from "@testing-library/react";
import mockReactRedux from "mock-react-redux";

import { selector } from "../../../shared/reducers/postsReducer";
import Posts from "..";

jest.mock("../useCustomEffects", () => () => jest.fn());

describe("Posts", () => {
  it("Can render", () => {
    mockReactRedux().giveMock(
      selector,
      jest.fn().mockReturnValue({
        postsData: [{ id: "1", title: "post 1" }],
        isFetchPostsLoading: false,
        fetchPostsError: "",
      })
    );

    render(<Posts />);
    expect(screen.getByText("post 1")).toBeInTheDocument();
  });
});
