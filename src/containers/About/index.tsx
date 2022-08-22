import { Link } from "react-router-dom";

import { EProtectedRoutes } from "../../shared/constants/routes";
import useNavigation from "../../shared/utils/customHooks/useNavigation";

const About = () => {
  const { navigateToPostsPage } = useNavigation();

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button onClick={navigateToPostsPage}>Go to Posts page</button>
      <Link to={EProtectedRoutes.Confidential}>Confidential</Link>
    </div>
  );
};

export default About;
