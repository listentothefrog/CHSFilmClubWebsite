import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 nav">
      <div className="flex items-center">
        <Image
          src={"/Cuthbertson_Favicon.png"}
          width={42}
          height={40}
          alt="Cuthbertson Logo"
        />
        <h1 className="text-2xl font-signature ml-2 font-bold">
          Cuthbertson Film Club
        </h1>
      </div>

      <ul className="hidden md:flex md:items-center">
        <li className="px-4 cursor-pointer capitalize font-medium link-underline hover:text-gray-800 ease-in-out">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium link-underline hover:text-gray-800 ease-in-out">
          <Link href={"/aboutus"}>About Us</Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium link-underline hover:text-gray-800 ease-in-out">
          <Link href={"/newsroom"}>Newsroom</Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium link-underline hover:text-gray-800 ease-in-out">
          <Link href={"/ourfilms"}>Our Films</Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium link-underline hover:text-gray-800 ease-in-out">
          <Link href={"/filmfestival"}>Film Festival</Link>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium link-underline">
          <Link href={"/joinfilmclub"}>
            <button className="px-4 py-2 bg-filmcluborange rounded-md font-semibold text-white">
              Join Film Club
            </button>
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? (
          <FaTimes className="text-black" size={30} />
        ) : (
          <FaBars className="text-black" size={30} />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-300 text-black">
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link href={"/aboutus"}>About Us</Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link href={"/newsroom"}>Newsroom</Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link href={"/ourfilms"}>Our Films</Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link href={"/filmfestival"}>Film Festival</Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
            <Link href={"/joinfilmclub"}>
              <button className="px-4 py-2 bg-filmcluborange rounded-md font-semibold text-white">
                Join Film Club
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
