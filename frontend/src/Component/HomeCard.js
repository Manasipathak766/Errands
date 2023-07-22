import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="bg-rose-500 shadow-md rounded py-4 px-5 mt-2 min-w-[200px]">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0", behavior:"smooth"})}>
          <div className="w-40 min-h-[150px]">
            <img src={image} alt="" className="h-full w-full" />
          </div>
          <h3 className="font-medium text-white text-center capitalize text-lg">
            {name}
          </h3>
          <p className="text-center text-white font-semibold capitalize">
            {category}
          </p>
          <p className="text-center text-white p-1 font-bold mt-1">
            <span className="text-red-700">₹</span>
            <span>{price}</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
