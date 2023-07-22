import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./App.css";
import Header from "./Component/Header";
import { setDataProduct } from "./redux/productSlice";

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state=>state.product))
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_Server}/product`)
      const resData = await res.json()
      console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  },[])
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-20 bg-yellow-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
