import AsyncAction from "../AsyncAction";

describe("AsyncAction", () => {
  const asyncAction = new AsyncAction(`GET_ASYNC_DATA`);
  const payload = 10;

  it("Should change result of async call based on request type", () => {
    expect(asyncAction.REQUEST).toEqual("GET_ASYNC_DATA_REQUEST");
    expect(asyncAction.SUCCESS).toEqual("GET_ASYNC_DATA_SUCCESS");
    expect(asyncAction.FAILURE).toEqual("GET_ASYNC_DATA_FAILURE");
  });

  it("Should change result of async call based on request type with payload", () => {
    expect(asyncAction.request(payload)).toEqual({
      type: "GET_ASYNC_DATA_REQUEST",
      payload,
    });
    expect(asyncAction.success(payload)).toEqual({
      type: "GET_ASYNC_DATA_SUCCESS",
      payload,
    });
    expect(asyncAction.failure(payload)).toEqual({
      type: "GET_ASYNC_DATA_FAILURE",
      payload,
    });
  });

  it("Should throw an error if async action initialized without type", () => {
    expect(() => new AsyncAction()).toThrow(
      new Error("Type parameter is mandatory")
    );
  });

  it("Should change result of async call based on request type with payload", () => {
    expect(asyncAction.request()).toEqual({ type: "GET_ASYNC_DATA_REQUEST" });
    expect(asyncAction.success()).toEqual({ type: "GET_ASYNC_DATA_SUCCESS" });
    expect(asyncAction.failure()).toEqual({ type: "GET_ASYNC_DATA_FAILURE" });
  });
});
