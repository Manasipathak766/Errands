import React from "react";
import { TbCategory2 } from "react-icons/tb";

const FilterProduct = ({category, onClick, isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-8 hover:border rounded-full cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-yellow-400"}`}>
        <TbCategory2 />
      </div>
      <p className="text-center font-medium my-2 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
