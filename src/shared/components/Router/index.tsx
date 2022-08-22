import { Navigate, Route, Routes } from "react-router-dom";

import About from "../../../containers/About";
import Confidential from "../../../containers/Confidential";
import Posts from "../../../containers/Posts";
import { EProtectedRoutes, EPublicRoutes } from "../../constants/routes";
import ProtectedRoutes from "../ProtectedRoutes";

const Router = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path={EPublicRoutes.About} element={<About />} />
    <Route path={EPublicRoutes.Posts} element={<Posts />} />
    <Route element={<ProtectedRoutes />}>
      <Route path={EProtectedRoutes.Confidential} element={<Confidential />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default Router;
