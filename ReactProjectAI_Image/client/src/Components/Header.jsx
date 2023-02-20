import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import home from "../assets/home.png";
import { ToastContainer } from "react-toastify";

const Header = () => {
  return (
    <header className="w-full h-16 flex justify-between items-center bg:white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/" className="flex">
        <img src={home} className="w-6 mx-2 object-contain" alt="LOGO" />
        <img src={logo} className="w-28 object-contain" alt="LOGO" />
      </Link>
      <div className="space-x-2">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Link
          to="/create-post"
          className="font-inner text-sm xs:text-xl font-medium bg-[#6469ff] text-white xs:px-4 xs:py-2 px-2 py-2 rounded-md hover:bg-[rgb(88,92,221)]"
        >
          Create
        </Link>
        <Link
          to="/ask-GPT"
          className="font-inner text-sm xs:text-xl font-medium bg-gray-800 text-white xs:px-4 xs:py-2 px-2 py-2 rounded-md"
        >
          Ask-GPT
        </Link>
      </div>
    </header>
  );
};

export default Header;
