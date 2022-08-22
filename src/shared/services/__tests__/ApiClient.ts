// @ts-ignore
import fetchMock from "fetch-mock/es5/client";

import apiClient from "../ApiClient";

describe("apiClient", () => {
  it("Should retrieve parsed json", () => {
    const expected = { a: "a", b: null };
    const response = JSON.stringify(expected);
    const route = "http://example.com/tets1";

    fetchMock.get(route, {
      body: response,
      headers: { "content-type": "application/json" },
    });

    return apiClient
      .get(route, {})
      .then((data) => expect(data).toEqual(expected));
  });

  it("Should update and return parsed json", () => {
    const expected = { a: "a", b: null };
    const response = JSON.stringify(expected);
    const route = "http://example.com/tets1";

    fetchMock.put(route, {
      body: response,
      headers: { "content-type": "application/json" },
    });

    return apiClient
      .put(route, {})
      .then((data) => expect(data).toEqual(expected));
  });

  it("Should modify and return parsed json", () => {
    const expected = { a: "a", b: null };
    const response = JSON.stringify(expected);
    const route = "http://example.com/tets1";

    fetchMock.patch(route, {
      body: response,
      headers: { "content-type": "application/json" },
    });

    return apiClient
      .patch(route, {})
      .then((data) => expect(data).toEqual(expected));
  });

  it("Should return parsed json", () => {
    const expected = { a: "a", b: null };
    const response = JSON.stringify(expected);
    const route = "http://example.com/tets1";

    fetchMock.postOnce(route, {
      body: response,
      headers: { "content-type": "application/json" },
    });

    return apiClient
      .post(route, {})
      .then((data) => expect(data).toEqual(expected));
  });

  it("Should delete and return remaining parsed json", () => {
    const expected = { a: "a", b: null };
    const response = JSON.stringify(expected);
    const route = "http://example.com/tets1";

    fetchMock.delete(route, {
      body: response,
      headers: { "content-type": "application/json" },
    });

    return apiClient
      .delete(route, {})
      .then((data) => expect(data).toEqual(expected));
  });

  it("Should return blob", () => {
    const expected = new Blob();
    const response = expected;
    const route = "http://example.com/test2";

    fetchMock.get(route, {
      body: response,
      headers: { "content-type": "application/pdf" },
    });

    return apiClient
      .get(route, {})
      .then((data) => expect(data).toEqual(expected));
  });

  it("Should return text", () => {
    const expected = JSON.stringify({ a: "a", b: null });
    const response = expected;
    const route = "http://example.com/test3";

    fetchMock.postOnce(route, {
      body: response,
      status: 200,
    });

    return apiClient
      .post(route, {})
      .then((data) => expect(data).toEqual(expected));
  });

  it("Should throw server error", () => {
    const expected = { errors: [1, 2, 3] };
    const response = JSON.stringify(expected);
    const route = "http://example.com/throwError";

    fetchMock.postOnce(route, {
      body: response,
      headers: { "content-type": "application/json" },
      status: 401,
    });

    return apiClient
      .post(route, {})
      .catch((data) => expect(data).toEqual(expected));
  });
});
