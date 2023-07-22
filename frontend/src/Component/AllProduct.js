import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  const loadingArrayFeature = new Array(10).fill(null);
  //filter data display
  const [filterby, setfilterby] = useState("");
  const [dataFilter, setdataFilter] = useState([]);
  useEffect(() => {
    setdataFilter(productData);
  }, [productData]);
  const handleFilterProduct = (category) => {
    setfilterby(category)
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setdataFilter(() => {
      return [...filter];
    });
  };

  return (
    <div className="my-9">
      <h2 className="font-bold text-2xl text-slate-800 mb-3 mt-2">{heading}</h2>
      <div className="flex gap-9 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[200px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                />
              );
            })
          : loadingArrayFeature.map((el,index) => (
              <CardFeature loading="Loading..." key={index+"allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
