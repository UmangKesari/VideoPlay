import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
        />

        <img className="h-12 mx-2" alt="youtube-logo" src="" />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 rounded-l-full border border-gray-500 h-8 p-4"
          type="text"
        />
        <button className="rounded-r-full border border-gray-500 h-8 bg-slate-200 px-4">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user" src="../../images/user" />
      </div>
    </div>
  );
};

export default Header;
