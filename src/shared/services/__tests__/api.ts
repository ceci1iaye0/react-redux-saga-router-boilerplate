import { posts } from "../api";
import ApiClient from "../ApiClient";

describe("posts", () => {
  beforeEach(() => {
    jest.spyOn(ApiClient, "get").mockResolvedValue("test");
    jest.spyOn(ApiClient, "post").mockResolvedValue("test");
    jest.spyOn(ApiClient, "put").mockResolvedValue("test");
    jest.spyOn(ApiClient, "delete").mockResolvedValue("test");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("getAll", async () => {
    const res = await posts.getAll();
    expect(res).toEqual("test");
  });

  it("get", async () => {
    const id = 1;
    const res = await posts.get(id);
    expect(res).toEqual("test");
  });

  it("post", async () => {
    const res = await posts.post({ test: "test" });
    expect(res).toEqual("test");
  });

  it("put", async () => {
    const id = 1;
    const res = await posts.put(id, { test: "test" });
    expect(res).toEqual("test");
  });

  it("delete", async () => {
    const id = 1;
    const res = await posts.delete(id);
    expect(res).toEqual("test");
  });
});
