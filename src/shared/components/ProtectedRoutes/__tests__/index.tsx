import { render, screen } from "@testing-library/react";

import * as helpers from "../../../utils/helpers/authentication";
import ProtectedRoutes from "../index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <div data-testid="outlet" />,
  Navigate: () => <div data-testid="navigate" />,
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("ProtectedRoutes", () => {
  it("Should render Outlet", () => {
    jest.spyOn(helpers, "checkIsAuthenticated").mockReturnValue(true);
    render(<ProtectedRoutes />);

    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });

  it("Should render Navigate", () => {
    jest.spyOn(helpers, "checkIsAuthenticated").mockReturnValue(false);
    render(<ProtectedRoutes />);

    expect(screen.getByTestId("navigate")).toBeInTheDocument();
  });
});
