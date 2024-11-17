import { Link } from "react-router-dom";
import imgframe from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(logOutUser);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="min-w-20 ">{user && user.email}</div>
        <div className="nav space-x-5">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/career">Career</Link>
        </div>
        <div className="flex gap-2 items-center">
          <figure>
            {user && user?.email ? (
              <div className="flex gap-2 items-center">
                <p>{user?.displayName}</p>
                <img
                  className=" rounded-full w-11"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <img className="w-[25px]" src={imgframe} alt="" />
            )}
          </figure>
          {user && user.email ? (
            <button
              onClick={logOutUser}
              className="btn bg-black text-white rounded-lg w-36 "
            >
              Log Out
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn bg-black text-white rounded-lg w-36 "
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
