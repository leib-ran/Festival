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

function Navbar() {
  const navbarHeight = useSelector((state) => state.heightHandler);
  const arrPages = [homePage, blog, store, contact, about];
  return (
    <div
      className={`flex justify-between bg-gray-900 h-${navbarHeight} overflow-hidden transition duration-1000 ease-in-out relative z-10`}
    >
      <div className="flex">
        <div className="h-16 pt-1 w-16">
          <Logo></Logo>
        </div>
        {arrPages.map((link) => {
          return (
            <Link
              className="w-16 pt-4 hover:bg-blue-900 text-white text-center cursor-pointer	 align-bottom "
              to={link.getPath()}
            >
              {link.getName()}
            </Link>
          );
        })}
      </div>
      <div className="flex h-full">
        <div className="pt-2">
          <form className="flex">
            <input
              name="q"
              className=" h-8 w-40 ml-2 pl-2 rounded-md	"
              placeholder="Search for an item"
            />
            <button className="bg-white ml-2 p-1 font-bold">search</button>
            <CartButton />
            <UserButton />
          </form>
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
