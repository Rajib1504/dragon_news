import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const { data } = useLoaderData();
  console.log(data);

  return <div>category news{data.length}</div>;
};

export default CategoryNews;
