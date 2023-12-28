import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full h-20 pl-2 pr-2">
      <div className="flex items-center">
        <Image
          src={"/Cuthbertson_Favicon.png"}
          width={35}
          height={30}
          alt="Cuthbertson Logo"
        />
        <div className="ml-2">
          <h1 className="text-xl uppercase font-bold">Cuthbertson Film Club</h1>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div className="ml-6">About Us</div>
        <div className="ml-6">Newsroom</div>
        <div className="ml-6">Our Films</div>
        <div className="ml-6">Film Festival</div>
        <div className="ml-6">
          <button className="px-4 py-2 bg-filmcluborange rounded-md font-semibold text-white">
            Join Film Club
          </button>
        </div>
      </div>
    </div>
  );
}
