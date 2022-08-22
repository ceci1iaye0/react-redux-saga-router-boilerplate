import { act, renderHook } from "@testing-library/react";

import { EPublicRoutes } from "../../../constants/routes";
import useNavigation from "../useNavigation";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("useNavigation", () => {
  let result: any;

  beforeEach(() => {
    result = renderHook(() => useNavigation()).result;
  });

  describe("navigate()", () => {
    it("Should call navigate with -1", () => {
      act(() => {
        result.current.navigate();
      });

      expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    it("Should call navigate with page", () => {
      const page = "/test";

      act(() => {
        result.current.navigate(undefined, page);
      });

      expect(mockNavigate).toHaveBeenCalledWith(page);
    });
  });

  describe("navigateToPostsPage()", () => {
    it("Should navigate to Posts page", () => {
      act(() => {
        result.current.navigateToPostsPage();
      });

      expect(mockNavigate).toHaveBeenCalledWith(EPublicRoutes.Posts);
    });
  });
});
