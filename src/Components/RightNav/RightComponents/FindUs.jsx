import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
const FindUs = () => {
  return (
    <div className="border my-3 w-[257px] flex-col">
      <button className="btn btn-wide bg-transparent rounded-none flex gap-2">
        <FaFacebook />
        <p>Facebook</p>
      </button>
      <button className="btn btn-wide bg-transparent rounded-none flex gap-2">
        <IoLogoTwitter />
        <p>Twitter</p>
      </button>
      <button className="btn btn-wide bg-transparent rounded-none flex gap-2">
        <AiFillInstagram />
        <p>Instagram</p>
      </button>
    </div>
  );
};

export default FindUs;
