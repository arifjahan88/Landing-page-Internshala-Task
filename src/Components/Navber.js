import React from "react";

const Navber = () => {
  const menuitem = (
    <>
      <li className="mx-1 btn btn-ghost rounded-lg lg:text-white">Home</li>
      <li className="mx-1 btn btn-ghost rounded-lg lg:text-white">About Us</li>
      <li className="mx-1 btn btn-ghost rounded-lg lg:text-white">Contact Us</li>
      <li className="mx-1 btn btn-ghost rounded-lg lg:text-white">Login</li>
      <li className="mx-1 btn btn-ghost rounded-lg lg:text-white">Register</li>
    </>
  );
  return (
    <div className="navbar bg-emerald-600">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuitem}
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl text-white">Logo</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuitem}</ul>
      </div>
      <div className="navbar-end">
        <p className="btn btn-sm btn-outline text-white mr-3">WhatsApp</p>
        <p className="btn btn-sm btn-outline text-white">Contact Us</p>
      </div>
    </div>
  );
};

export default Navber;
