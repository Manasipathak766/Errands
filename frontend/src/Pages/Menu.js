import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "../Component/AllProduct";
import { addCartItem } from "../redux/productSlice";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay))
  };
  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl bg-yellow-100 m-auto md:flex gap-4">
        <div className="max-w-sm overflow-hidden w-full p-5">
          <img
            src={productDisplay.image}
            alt=""
            className="hover:scale-105 transition-all h-full cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <h3 className="font-medium text-black  capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className=" text-black font-semibold capitalize text-2xl">
            {productDisplay.category}
          </p>
          <p className=" text-black  font-bold text-2xl">
            <span className="text-red-700">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
            <button className="bg-yellow-400 hover:bg-yellow-600 my-2 min-w-[100px] rounded cursor-pointed" onClick={handleAddCartProduct}>
              Add To Cart
            </button>
          </div>
          <div>
            <p className="text-rose-600 font-bold">Description: </p>
            <p className="text-black font-semibold">{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"} className="py-2"/>
    </div>
  );
};

export default Menu;
