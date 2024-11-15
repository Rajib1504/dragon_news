import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    author: { img: authorImg, name: authorName, published_date: publishedDate },
    image_url,
    title,
    details,
    total_view,
    rating: { number },
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg border-2 border-gray-300 mb-5 hover:shadow-xl transition duration-300 mx-auto w-11/12">
      {/* Header with Author Info and Share Icon */}
      <div className="flex items-center  bg-base-200 rounded-xl justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <img
            src={authorImg}
            alt={authorName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{authorName}</p>
            <p className="text-sm text-gray-500">
              {new Date(publishedDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <FaRegBookmark className="text-gray-500 cursor-pointer" />
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>
      <h2 className="text-lg font-bold mt-4 text-center ">{title}</h2>
      {/* News Image */}
      <img src={image_url} alt={title} className="p-8 " />

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4 pb-3 border-b-2">
          {details.length > 500 ? `${details.substring(0, 500)}...` : details}
          <span className="text-blue-500 cursor-pointer"> Read More</span>
        </p>

        {/* Footer with Rating and Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <p className="ml-1 font-semibold">{number}</p>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye />
            <p className="ml-1">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
