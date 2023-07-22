import React, { useRef } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import AllProduct from "../Component/AllProduct";
import CardFeature from "../Component/CardFeature";
import HomeCard from "../Component/HomeCard";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  
  const homeProductCardList = productData.slice(0, 4);
  const homeProductCardListVegetables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );


  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };


  
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 py-4 mt-2">
          <div className="flex gap-3 bg-rose-500 w-36 px-4 py-1 items-center rounded-full mt-2">
            <p className="text-xs text-white">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/130/130066.png"
              alt=""
              className="h-5"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-4">
            Embrace Convenience, Run Your{" "}
            <span className="text-rose-600">Errands From Home!</span>
          </h2>
          <p className="py-4 text-base">
            Welcome to Errands, where convenience meets productivity. Say
            goodbye to time-consuming errands and hello to a streamlined,
            hassle-free experience. With Errands, running your errands has never
            been easier. Embrace the freedom to accomplish your tasks
            efficiently and effortlessly, all from the convenience of your own
            home.
          </p>
          <button className="font-bold bg-rose-600 hover:bg-rose-800 text-white rounded-md px-4 py-2 mt-3">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el,index) => <HomeCard loading="Loading..." key={index+"loading"}/>)}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-3 mt-2">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4 p-2">
            <button
              className="bg-slate-300 hover:bg-slate-500 text-lg py-1 px-1 rounded"
              onClick={preveProduct}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="bg-slate-300 hover:bg-slate-500 text-lg py-1 px-1 rounded"
              onClick={nextProduct}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 items-center overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCardListVegetables[0]
            ? homeProductCardListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"vegetables"}
                    id={el._id}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))
              }
        </div>
      </div>

      <AllProduct heading={"Your Product"}/>
      
    </div>
  );
};

export default Home;
