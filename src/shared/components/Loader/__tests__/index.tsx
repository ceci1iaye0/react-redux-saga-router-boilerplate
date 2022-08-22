import { render, screen } from "@testing-library/react";

import Loader from "..";

describe("Loader", () => {
  it("Can render", () => {
    render(<Loader isLoading={true} fullscreen={true} overlay={true} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("Can render null", () => {
    render(<Loader isLoading={false} />);

    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });
});
