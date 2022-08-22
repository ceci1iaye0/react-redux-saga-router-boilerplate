import { TURLs } from "../../constants/types";

export const getBaseURL = (
  currentWebURL: string,
  FE_URLS: TURLs,
  BE_URLS: TURLs
) => {
  switch (currentWebURL) {
    case FE_URLS?.dev:
      return BE_URLS?.dev;
    case FE_URLS?.local:
      return BE_URLS?.local;
    case FE_URLS?.sit:
      return BE_URLS?.sit;
    case FE_URLS?.uat:
      return BE_URLS?.uat;
    case FE_URLS?.staging:
      return BE_URLS?.staging;
    case FE_URLS?.prod:
      return BE_URLS?.prod;
    default:
      return BE_URLS?.local;
  }
};
