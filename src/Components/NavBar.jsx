import { Link } from "react-router-dom";
import user from "../assets/user.png";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="min-w-20 "></div>
        <div className="nav space-x-5">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/career">Career</Link>
        </div>
        <div className="flex gap-2 items-center">
          <figure>
            <img className="w-[25px]" src={user} alt="" />
          </figure>
          <Link
            to={"/auth/login"}
            className="btn bg-black text-white rounded-lg w-36 "
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
