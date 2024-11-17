import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Pages/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  //   console.log(loader);
  const location = useLocation();
  //   console.log(location);
  if (loader) {
    return <Loading></Loading>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRouter;
