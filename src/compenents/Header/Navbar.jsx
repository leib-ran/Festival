import React from "react";
import Logo from "../Logo/Logo";
import Links from "./Links";
import { Link, withRouter } from "react-router-dom";
import Item from "../Cart/item";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qua: localStorage.getItem("quan") || 0,
      show: "hidden",
      data: localStorage.getItem("items") || "[]",
    };
  }

  handelSearch = (e) => {
    e.preventDefault();
    let q = e.target[0].name;
    let value = e.target[0].value;
    this.props.history.push(`/store?${q}=${value}`);
  };
  render() {
    return (
      <div className="flex justify-between bg-gray-900  relative z-10">
        <div className="flex">
          <div className="h-16 pt-1 w-16">
            <Logo></Logo>
          </div>
          <Link
            to="/"
            className="w-16 pt-3 hover:bg-blue-900 text-white text-center cursor-pointer	 align-bottom "
          >
            Home Page
          </Link>
          ז
          <Link
            to="/login"
            className="w-16 pt-3 hover:bg-blue-900 text-white text-center cursor-pointer	 align-bottom "
          >
            Sign In
          </Link>
          <Link
            to="/"
            className="w-16 pt-3 hover:bg-white hover:text-blue-900 text-white text-center cursor-pointer	 align-bottom "
          >
            Sign Up
          </Link>
          <Link
            to="/Blog"
            className="w-16 pt-3 hover:bg-white hover:text-blue-900 text-white text-center cursor-pointer	 align-bottom "
          >
            Blog
          </Link>
          <Link
            to="/store"
            className="w-16 pt-3 hover:bg-white hover:text-blue-900 text-white text-center cursor-pointer	 align-bottom "
          >
            Store
          </Link>
          <Link
            to="/contact"
            className="w-16 pt-3 hover:bg-white hover:text-blue-900 text-white text-center cursor-pointer	 align-bottom "
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="w-16 pt-3 hover:bg-white hover:text-blue-900 text-white text-center cursor-pointer	 align-bottom "
          >
            About
          </Link>
          <div>
            <Link
              to="/cart"
              className="cursor-pointer relative bg-white ml-1 mt-2 h-8 w-8 pt-1.5 pl-1.5 rounded-full flex "
            >
              <div
                className="flex"
                onMouseEnter={() => {
                  this.setState({ show: "" });
                }}
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
                  {this.props.quan}
                </div>
              </div>
            </Link>
            <div
              className={`${this.state.show} bg-gray-100 z-80 absolute`}
              onMouseLeave={() => this.setState({ show: "hidden" })}
            >
              {console.log(localStorage.getItem["items"])}
              {JSON.parse(this.state.data).map((data) => (
                <Item data={data}></Item>
              ))}
              <Link
                to="/cart"
                className="cursor-pointer relative bg-white bg-red-600 text-white font-bold pt-1 pb-1 pl-5 pr-5"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <Links
            image={"/images/links/link_desert_item.jpg"}
            linkName="DESERT ITEMS"
          ></Links>
          <Links
            image={"/images/links/nature.jpg"}
            linkName="NATURE ITEMS"
          ></Links>
          <Links
            image={"/images/links/technodrom.jpg"}
            linkName="NIGHT ITEMS"
          ></Links>
          <div className="pt-2">
            <form onSubmit={this.handelSearch}>
              <input
                name="q"
                className=" h-8 w-40 ml-2 pl-2 rounded-md	"
                placeholder="Search for an item"
              />
              <button className="bg-white ml-2 p-1 font-bold">search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);
