import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import ContentMarquee from "./ContentMarquee.jsx";
import NavBar from "./NavBar.jsx";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-3">
      <img className="w-[250px]" src={logo} alt="" />
      <p className="text-gray-300 ">Journalism Without Fear or Favour</p>
      <p>{moment().format("MMMM Do YYYY")}</p>

      <section>
        {" "}
        <ContentMarquee></ContentMarquee>
      </section>
    </div>
  );
};

export default Header;
