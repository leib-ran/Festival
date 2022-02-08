import React from "react";
import Logo from "../Logo/Logo";
import Links from "./Links";
import { Link, withRouter } from "react-router-dom";
import Item from "../Cart/item";
import { useSelector } from "react-redux";

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

function Navbar() {
  const navbarHeight = useSelector((state) => state.heightHandler);
  const arrPages = [homePage, blog, store, contact, about];
  return (
    <div
      className={`flex justify-between bg-gray-900 h-${navbarHeight} overflow-hidden w-full transition duration-1000 ease-in-out fixed xs:top-0 lg:relative  z-10`}
    >
      <div className="flex">
        <div className="h-16 pt-1 w-16">
          <Logo></Logo>
        </div>
        {arrPages.map((link, index) => {
          return (
            <Link
              className="w-16 pt-4 hover:bg-blue-900 text-white text-center cursor-pointer	 align-bottom "
              key={`${link.getName}${index}`}
              to={link.getPath()}
            >
              {link.getName()}
            </Link>
          );
        })}
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
