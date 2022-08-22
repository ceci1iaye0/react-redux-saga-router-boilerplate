import { render, screen } from "@testing-library/react";

import App from "../index";

jest.mock("../../../shared/components/Router", () => () => (
  <div data-testid="router" />
));

afterEach(() => {
  jest.clearAllMocks();
});

describe("App", () => {
  it("Can render", () => {
    render(<App />);
    expect(screen.getByTestId("router")).toBeInTheDocument();
  });
});
