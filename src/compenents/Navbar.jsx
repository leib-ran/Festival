import React from "react";
import Logo from "./Logo";
import Link from "./Link";

export default function Navbar(props) {
  return (
    <div className="flex justify-between bg-red-800 opacity-80">
      <div className="flex">
        <div className="h-16 pt-1 w-16">
          <Logo></Logo>
        </div>
        <div className="pt-2">
          <input
            className=" h-8 w-40 ml-2 pl-2 rounded-md	"
            placeholder="Search for an item"
            onChange={(e) => props.searchfunc(e.target)}
          />
        </div>
        <a
          src="#"
          className="w-16 pt-3 hover:bg-blue-900 text-white text-center cursor-pointer	 align-bottom "
        >
          Sign In
        </a>
        <a
          src="#"
          className="w-16 pt-3 hover:bg-white hover:text-blue-900 text-white text-center cursor-pointer	 align-bottom "
        >
          Sign Up
        </a>

        <a
          src="#"
          className="cursor-pointer bg-white ml-1 mt-2 h-8 w-8 pt-1.5 pl-1.5 rounded-full flex "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <div className="rounded-full bg-red-800 text-center bg-yellow-500 text-xs w-4 h-4">
            {props["quan-cart"]}
          </div>
        </a>
      </div>
      <div className="flex h-full">
        <Link
          image={"/images/links/link_desert_item.jpg"}
          linkName="DESERT ITEMS"
        ></Link>
        <Link image={"/images/links/nature.jpg"} linkName="NATURE ITEMS"></Link>
        <Link
          image={"/images/links/technodrom.jpg"}
          linkName="NIGHT ITEMS"
        ></Link>
      </div>
    </div>
  );
}
