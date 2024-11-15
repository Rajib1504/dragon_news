import { useEffect, useState } from "react";

const LeftNav = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setcategory(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="font-semibold">All Category({category.length})</h2>

      <div className="flex md:flex-col max-w-lg flex-wrap  gap-2 my-4">
        {category.map((item) => (
          <button className="btn" key={item.category_id}>
            {item.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
