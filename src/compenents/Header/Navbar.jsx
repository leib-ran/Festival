import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Links from "./Links";
import { Link, withRouter } from "react-router-dom";
import Item from "../Cart/item";
import { useSelector } from "react-redux";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  about,
  blog,
  contact,
  homePage,
  login,
  signUp,
  store,
} from "../../helper/PathName";
import { CartButton } from "./CartButton";
import { UserButton } from "./UserButton";
import { SearchProducts } from "../features/SearchProducts/SearchProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const navbarHeight = useSelector((state) => state.heightHandler);
  const arrPages = [homePage, blog, store, contact, about];
  const [show, setShow] = useState("hidden");
  return (
    <div
      className={`flex justify-between bg-gray-900 h-${navbarHeight} overflow-hidden w-full transition duration-1000 ease-in-out fixed xs:top-0 lg:relative  z-30`}
    >
      <div className="flex">
        <div className="h-16 pt-1 w-16 hidden lg:block">
          <Logo></Logo>
        </div>
        <div className="lg:hidden text-white flex flex-col justify-center items-center w-16 cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShow("")}
          ></FontAwesomeIcon>
        </div>
        <div
          className="flex flex-col lg:flex-row lg:static fixed z-20 top-0 bg-white lg:bg-transparent	 lg:text-white "
          onClick={() => {
            setShow("hidden");
          }}
        >
          {arrPages.map((link, index) => {
            return (
              <Link
                className={`lg:w-16 w-screen  pt-4 hover:bg-black hover:text-white shadow-lg	lg:shadow-none lg:hover:bg-blue-900 ${show} lg:block lg:text-white text-black text-center cursor-pointer	 align-bottom `}
                key={`${link.getName}${index}`}
                to={link.getPath()}
              >
                {link.getName()}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex h-full">
        <div className="pt-2 border-box flex">
          <SearchProducts />
          <CartButton />
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navbar);

// handelSearch = (e) => {
//   e.preventDefault();
//   let q = e.target[0].name;
//   let value = e.target[0].value;
//   this.props.history.push(`/store?${q}=${value}`);
// };
// onSubmit={this.handelSearch}
