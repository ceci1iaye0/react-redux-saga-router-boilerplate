import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Router from "..";

jest.mock("../../../../containers/About", () => () => (
  <div data-testid="about" />
));

afterEach(() => {
  jest.clearAllMocks();
});

describe("Router", () => {
  it("Can render", () => {
    render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
    expect(screen.getByTestId("about")).toBeInTheDocument();
  });
});
