import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";

const CardFeature = ({ image, name, price, category, loading, id }) => {
  const dispatch = useDispatch()
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem({
      _id: id,
      name: name,
      price: price,
      category: category,
      image: image
    }))
  };
  return (
    <div className="min-w-[200px] max-w-[200px] bg-rose-500 drop-shadow-lg hover:shadow-2xl py-4 px-3 cursor-pointer rounded mt-4 flex flex-col">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} alt="" className="h-full" />
            </div>
            <h3 className="font-medium text-white capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-white font-semibold capitalize">{category}</p>
            <p className="text-white p-1 font-bold mmt-2">
              <span className="text-red-700">₹</span>
              <span>{price}</span>
            </p>
          </Link>
          <button
            className="bg-yellow-400 hover:bg-yellow-600 my-2 py-1 rounded cursor-pointed w-full"
            onClick={handleAddCartProduct}
          >
            Add To Cart
          </button>
        </>
      ) : (
        <div className="min-h-[200px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
