import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="flex justify-between	 items-center bg-blue-300 p-2.5">
      <div className="flex">
        <input placeholder="search" />
        <Logo></Logo>
        <a src="#" className="bg-white ml-5 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a src="#" className="bg-white ml-5 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </a>
      </div>
      <div className="flex">
        <a>
          <img
            className="w-16 h-16 rounded-full "
            src="/images/links/link_desert_item.jpg"
          />
        </a>
        <a>
          <img
            className="w-16 h-16 rounded-full "
            src="/images/links/nature.jpg"
          />
        </a>
      </div>
    </div>
  );
}
