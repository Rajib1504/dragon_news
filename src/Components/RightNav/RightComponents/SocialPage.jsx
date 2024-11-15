import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const SocialPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-xl font-semibold mb-4">Login with</h1>
        <button className="btn btn-wide bg-transparent flex gap-2 text-[#49a1d787] border-[#49a1d787]">
          <FaGoogle />
          <p>Login with Google</p>
        </button>
        <button className="btn btn-wide bg-transparent flex gap-2">
          <FaGithub />
          <p>Login with Github</p>
        </button>
      </div>
    </div>
  );
};

export default SocialPage;
