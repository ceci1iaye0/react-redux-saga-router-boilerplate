import {
  getHeaders,
  isBlobContentType,
  isJsonContentType,
  modifyHeaders,
  updateBodyOrHeader,
} from "../apiClientHelper";

describe("isJsonContentType()", () => {
  it("Should return true for json content types", () => {
    expect(isJsonContentType("application/hal+json")).toBeTruthy();
    expect(isJsonContentType("application/json")).toBeTruthy();
  });

  it("Should return false for non json content types", () => {
    expect(isJsonContentType("text")).toBeFalsy();
  });
});

describe("isBlobContentType()", () => {
  it("Should return true for blob content types", () => {
    expect(isBlobContentType("image/png")).toBeTruthy();
    expect(isBlobContentType("application/pdf")).toBeTruthy();
  });

  it("Should return false for non blob content types", () => {
    expect(isBlobContentType("text")).toBeFalsy();
  });
});

describe("getHeaders()", () => {
  it("Should return headers", () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer 123`,
    });
    expect(getHeaders()).toEqual(headers);
  });
});

describe("modifyHeaders()", () => {
  it("Should return empty options", () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const options = undefined;
    expect(modifyHeaders(options, headers)).toEqual({});
  });

  it("Should update headers", () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const options = {
      headers: {
        Authorization: "test",
      },
    };
    const result = new Headers({
      "Content-Type": "application/json",
      Authorization: "test",
    });
    expect(modifyHeaders(options, headers)).toEqual({});
    expect(headers).toEqual(result);
  });
});

describe("updateBodyOrHeader()", () => {
  it("Should return json string body", () => {
    const body = { test: "test" };
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    expect(updateBodyOrHeader(body, headers)).toEqual(JSON.stringify(body));
  });

  it("Should return string body when body is a string", () => {
    const body = JSON.stringify({ test: "test" });
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    expect(updateBodyOrHeader(body, headers)).toEqual(body);
  });

  it("Should return body when body is a formData", () => {
    const body = new FormData();
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    expect(updateBodyOrHeader(body, headers)).toEqual(body);
  });
});
