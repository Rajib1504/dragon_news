import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const ContentMarquee = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-4 bg-gray-200 flex gap-2 items-center p-2">
        <span className="bg-[#D72050] text-white py-2 px-4">Latest</span>
        <Marquee pauseOnHover={true} className="space-x-4">
          <Link to="/news">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, vero?
          </Link>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, vero?
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default ContentMarquee;
