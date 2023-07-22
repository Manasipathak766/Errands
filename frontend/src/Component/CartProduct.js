import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decreaseQty, deleteCartItem, increaseQty } from "../redux/productSlice";

const CartProduct = ({ id, name, category, total, qty, image, price }) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-rose-100 p-2 flex gap-4 rounded border cursor-pointer border-rose-400">
      <div className=" p-3 bg-rose-100 rounded overflow-hidden">
        {" "}
        {/* Set a fixed height */}
        <img src={image} alt="" className="h-40 w-38 object-cover" />{" "}
        {/* Ensure the image fits within the container */}
      </div>
      <div className="flex flex-col gap-2 my-3 w-full">
        <div className="flex justify-between">
          <h3 className="font-medium text-black  capitalize text-lg md:text-2xl">
            {name}
          </h3>
          <div className="cursor-pointer text-black hover:text-red-500" onClick={()=>dispatch(deleteCartItem(id))}>
            <RiDeleteBinLine />
          </div>
        </div>
        <p className=" text-black font-semibold capitalize ">{category}</p>
        <p className=" text-black  font-bold text-base">
          <span className="text-red-700">₹</span>
          <span>{price}</span>
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <button className="bg-slate-300 hover:bg-slate-500 my-2 p-1 rounded-full cursor-pointed" onClick={()=>dispatch(increaseQty(id))}>
              <AiOutlinePlusCircle />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
              className="bg-slate-300 hover:bg-slate-500 my-2 p-1 rounded-full cursor-pointed"
              onClick={()=>dispatch(decreaseQty(id))}
            >
              <AiOutlineMinusCircle />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <p>Total Price:</p>
            <p> <span className="text-red-700">₹</span>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
