import React, { useState } from "react";

import { toast } from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginsignup from "../imgs/login animation 2 .gif";
import { loginRedux } from "../redux/userSlice";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const userData = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(`${process.env.REACT_APP_Server}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataRes = await fetchData.json();
      console.log(dataRes);
      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } else {
      alert("Please fill the required fields");
    }
  };


  console.log(userData);

  return (
    <div className="p-8 md:p-8">
      <div className="w-full max-w-sm bg-rose-200 m-auto flex items-center flex-col p-7">
        {/* <h1>SignUp</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative cursor-pointer">
          <img
            src={data.image ? data.image : loginsignup}
            alt=""
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/4 bg-slate-300 bg-opacity-30 w-full text-center text-xs cursor-pointer">
              <p className="mb-1 text-xs">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>

        <form className="p-6 w-full flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password:</label>
          <div className="flex px-2 py-1 mt-1 mb-2 w-full bg-white rounded focus-within:outline focus-within:outline-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-white border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[120px] m-auto bg-yellow-100 hover:bg-yellow-300 cursor-pointer rounded-full text-xl font-medium text-center mt-4 py-1">
            Login
          </button>
        
        </form>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
