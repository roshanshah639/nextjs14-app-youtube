import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <ul className=" w-full navbar container flex justify-arround items-center py-4 px-8 shadow bg-slate-100 rounded mb-8 fixed">
      <nav className="flex justify-between items-center w-full ">
        <ul className="flex justify-between items-center w-full ">
          <div className="logo flex justify-between items-center ">
            <h1 className="text-cyan-500 mr-4 font-bold text-xl ml-4">
              MyLogo
            </h1>
          </div>
          // Links Container
          <div className="links flex justify-between items-center gap-20">
            <Link className="text-cyan-800 mr-4 font-bold text-xl " href="/">
              Home
            </Link>
            <Link
              className="text-cyan-800 mr-4 font-bold text-xl "
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-cyan-800 mr-4 font-bold text-xl "
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-cyan-800 mr-4 font-bold text-xl "
              href="/users"
            >
              Users
            </Link>
          </div>
        </ul>
      </nav>
    </ul>
  );
};

export default Navbar;
