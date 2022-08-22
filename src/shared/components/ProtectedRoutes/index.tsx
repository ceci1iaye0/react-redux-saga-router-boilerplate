import { Navigate, Outlet } from "react-router-dom";

import { checkIsAuthenticated } from "../../utils/helpers/authentication";

const ProtectedRoutes = () => {
  if (checkIsAuthenticated()) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoutes;
