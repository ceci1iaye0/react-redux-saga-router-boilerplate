import { render, screen } from "@testing-library/react";

import LoadingAndErrorHandling from "..";

jest.mock("../../Loader", () => () => <div data-testid="loader" />);

describe("LoadingAndErrorHandling", () => {
  const props = {
    isLoading: false,
    errorMessage: "",
  };
  const children = <div data-testid="children" />;

  it("Can render Loader", () => {
    const customProps = { ...props, isLoading: true };
    render(
      <LoadingAndErrorHandling {...customProps}>
        {children}
      </LoadingAndErrorHandling>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.queryByTestId("children")).not.toBeInTheDocument();
  });

  it("Can render error alert", () => {
    const customProps = { ...props, errorMessage: "error" };
    render(
      <LoadingAndErrorHandling {...customProps}>
        {children}
      </LoadingAndErrorHandling>
    );

    expect(screen.getByText("error")).toBeInTheDocument();
    expect(screen.queryByTestId("children")).not.toBeInTheDocument();
  });

  it("Can render children", () => {
    render(
      <LoadingAndErrorHandling {...props}>{children}</LoadingAndErrorHandling>
    );

    expect(screen.getByTestId("children")).toBeInTheDocument();
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });
});
