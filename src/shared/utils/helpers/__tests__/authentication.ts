import { checkIsAuthenticated } from "../authentication";

describe("checkIsAuthenticated()", () => {
  it("Should return false", () => {
    const expected = false;
    const result = checkIsAuthenticated();
    expect(result).toEqual(expected);
  });
});
