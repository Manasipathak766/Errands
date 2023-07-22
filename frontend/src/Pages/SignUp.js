import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import loginsignup from "../imgs/login animation 2 .gif";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image: "",
  });

  console.log(data);

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

console.log(process.env.REACT_APP_Server);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, email, password, confirmpassword } = data;
    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchData = await fetch(`${process.env.REACT_APP_Server}/signup`, {
          method : "POST",
          headers :{
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        });

        const dataRes= await fetchData.json()
        console.log(dataRes)
        // alert(dataRes.message);
        toast(dataRes.message)
        navigate("/login");
      } else {
        alert("Password not matching");
      }
    } else {
      alert("Please fill the required fields");
    }
  };
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
          <label htmlFor="firstName">First Name:</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.lastName}
            onChange={handleOnChange}
          />
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
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <div className="flex px-2 py-1 mt-1 mb-4 w-full bg-white rounded focus-within:outline focus-within:outline-blue-400">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className="w-full bg-white border-none outline-none"
              value={data.confirmpassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[120px] m-auto bg-yellow-100 hover:bg-yellow-300 cursor-pointer rounded-full text-xl font-medium text-center mt-4 py-1">
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-1">
          Have an account?{" "}
          <Link to={"/login"} className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
