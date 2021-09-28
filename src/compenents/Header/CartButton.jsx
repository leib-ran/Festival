import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cart } from "../../helper/PathName";

export function CartButton() {
  const quantity = useSelector((state) => state.count);
  return (
    <div>
      <Link
        to={cart.getPath()}
        className="cursor-pointer relative bg-white ml-1 mt-2 h-8 w-8 pt-1.5 pl-1.5 rounded-full flex "
      >
        {/* <div
                className="flex"
                onMouseEnter={() => {
                  this.setState({ show: "" });
                }}
              > */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <div className="rounded-full bg-red-800 text-center bg-yellow-500 text-xs w-4 h-4">
          {quantity}
        </div>
      </Link>
      {/* <div
              className={`${this.state.show} bg-gray-100 z-80 absolute`}
              onMouseLeave={() => this.setState({ show: "hidden" })}
            >
              {JSON.parse(this.state.data).map((data, index) => (
                <Item data={data} key={`item-${index}`} index={index}></Item>} */}

      <Link
        to="/cart"
        className="cursor-pointer relative bg-white bg-red-600 text-white font-bold pt-1 pb-1 pl-5 pr-5"
      >
        View Cart
      </Link>
    </div>
  );
}
