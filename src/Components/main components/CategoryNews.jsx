import { useLoaderData } from "react-router-dom";
import NewsCart from "./NewsCart";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(news);

  return (
    <div>
      <h3 className="font-semibold  text-center ">Dragon News Home</h3>
      <p className="text-gray-300 text-center mb-3 ">
        Total news count : {news.length}
      </p>
      <div>
        {news?.map((single) => (
          <NewsCart key={single._id} news={single}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
