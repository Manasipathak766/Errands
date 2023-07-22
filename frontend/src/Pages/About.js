import React from "react";
import logo from "../imgs/anilla.jpg";
const About = () => {
  return (
    <div className="py-2 px-4 md:px-2">
      <h1 className="text-rose-600 font-bold text-3xl my-5">About Us</h1>
      <div className="w-full flex justify-center">
        <img src={logo} alt="" className="w-full max-w-sm p-4" />
      </div>
      <p className="py-4 text-xl text-rose-800 font-serif text-center p-4">
        Welcome to Errands, where convenience meets productivity. Say goodbye to
        time-consuming errands and hello to a streamlined, hassle-free
        experience. With Errands, running your errands has never been easier.
        Embrace the freedom to accomplish your tasks efficiently and
        effortlessly, all from the convenience of your own home. We are here
        to provide you with a seamless and delightful online shopping
        experience. At Errands, we prioritize customer
        satisfaction, which is why we strive to offer competitive prices,
        regular promotions, and top-notch customer service. Our user-friendly
        website ensures effortless navigation allowing
        you to shop with confidence. Join us on this exciting journey of
        discovery and convenience, as we aim to be your go-to destination for
        all your shopping needs. Thank you for choosing Errands, and we look
        forward to serving you with excellence!
      </p>
    </div>
  );
};

export default About;
