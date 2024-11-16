import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import RightNav from "../RightNav/RightNav";

const NewsDetails = () => {
  const details = useLoaderData();
  const news = details.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 grid grid-cols-12 mx-auto gap-5 border-2">
        <section className="col-span-9">
          <div className="w-11/12 p-4 mx-auto">
            <h3 className="font-bold text-xl mb-4  text-left ">Dragon News </h3>
            <div className="border-2 rounded-md p-3 flex flex-col gap-4 bg-base-100 items-center">
              <figure>
                <img
                  className="w-11/12 mt-2 rounded-lg mx-auto"
                  src={news?.image_url}
                  alt=""
                />
              </figure>
              <h2 className="font-bold text-3xl text-center">{news?.title}</h2>
              <p className="w-11/12">{news?.details}</p>
              <div className="flex self-start ml-10 p-4">
                <Link
                  to={`/category/${news.category_id}`}
                  className="flex gap-2 items-center justify-center bg-[#D72050] text-white p-3 btn rounded-md"
                >
                  <FaArrowLeftLong /> All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
