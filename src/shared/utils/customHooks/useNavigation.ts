import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { EPublicRoutes } from "../../constants/routes";

export default () => {
  const nav = useNavigate();

  const navigate = (event?: MouseEvent, page?: string): void => {
    if (page) {
      nav(page);
    } else {
      nav(-1);
    }
  };

  const navigateToPostsPage = (event: MouseEvent): void => {
    navigate(event, EPublicRoutes.Posts);
  };

  return {
    navigate,
    navigateToPostsPage,
  };
};
