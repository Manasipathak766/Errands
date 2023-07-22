import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../imgs/anilla.jpg";
import { logoutRedux } from "../redux/userSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email);
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logged Out");
  };

const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-20 bg-rose-200 ... px-2 md:px-4 z-50">
      {/*desktop*/}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-20 w-25">
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-5 md:gap-7">
          <nav className=" gap-4 md:gap-7 text-based md:text-lg hidden md:flex">
            <Link to={""} className="text-2xl">
              Home
            </Link>
            <Link to={"menu/64ad2fa6f6094f49a752691a"} className="text-2xl">
              Menu
            </Link>
            <Link to={"about"} className = "text-2xl">
              About
            </Link>
            <Link to={"contact"} className = "text-2xl">
              Contact
            </Link>
          </nav>
          <div className="text-4xl text-slate-600 relative cursor-pointer">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-2 -right-1 text-white bg-red-500 h-5 w-5 rounded-full my-1 p-0 text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className="text-2xl text-slate-600" onClick={handleShowMenu}>
            <div className="border-2 border-solid border-slate-600 rounded-full text-4xl flex items-center cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt=""
                  className="h-full w-full rounded-full"
                />
              ) : (
                <FaUser />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-yellow-100 py-1 shadow drop-shadow-md text-sm flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrapp text-based cursor-pointer px-2 hover:bg-yellow-300"
                  >
                    New product
                  </Link>
                )}
                {userData.image ? (
                  <p
                    className="whitespace-nowrapp text-based cursor-pointer py-1 px-2 hover:bg-yellow-300"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrapp text-based cursor-pointer py-1 px-2 hover:bg-yellow-300"
                  >
                    Login
                  </Link>
                )}
                <nav className="  text-base md:text-base flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"menu/64ad2fa6f6094f49a752691a"}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}
    </header>
  );
};

export default Header;
