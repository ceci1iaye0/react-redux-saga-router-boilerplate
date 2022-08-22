import { TURLs } from "../../../constants/types";
import { getBaseURL } from "..";

describe("getBaseURL()", () => {
  const urls: TURLs = {
    local: "local",
    dev: "dev",
    sit: "sit",
    uat: "uat",
    staging: "staging",
    prod: "prod",
  };

  const feUrls = { ...urls };
  const beUrls = { ...urls };

  it("Should return local BE URL by default", () => {
    const current = "test";
    const expected = beUrls.local;
    const result = getBaseURL(current, feUrls, beUrls);
    expect(result).toBe(expected);
  });

  it("Should return dev BE URL", () => {
    const current = feUrls.dev as string;
    const expected = beUrls.dev;
    const result = getBaseURL(current, feUrls, beUrls);
    expect(result).toBe(expected);
  });

  it("Should return local BE URL", () => {
    const current = feUrls.local as string;
    const expected = beUrls.local;
    const result = getBaseURL(current, feUrls, beUrls);
    expect(result).toBe(expected);
  });

  it("Should return sit BE URL", () => {
    const current = feUrls.sit as string;
    const expected = beUrls.sit;
    const result = getBaseURL(current, feUrls, beUrls);
    expect(result).toBe(expected);
  });

  it("Should return uat BE URL", () => {
    const current = feUrls.uat as string;
    const expected = beUrls.uat;
    const result = getBaseURL(current, feUrls, beUrls);
    expect(result).toBe(expected);
  });

  it("Should return staging BE URL", () => {
    const current = feUrls.staging as string;
    const expected = beUrls.staging;
    const result = getBaseURL(current, feUrls, beUrls);
    expect(result).toBe(expected);
  });

  it("Should return prod BE URL", () => {
    const current = feUrls.prod as string;
    const expected = beUrls.prod;
    const result = getBaseURL(current, feUrls, beUrls);
    expect(result).toBe(expected);
  });
});
