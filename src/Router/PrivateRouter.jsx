import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Pages/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  console.log(loader);
  if (loader) {
    return <Loading></Loading>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRouter;
