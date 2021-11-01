import { Link } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage";
import Stars from "../Stars.jsx/Stars";
import CategorySymbol from "../CategorySymbol/CategorySymbol";
import icons from "../../helper/iconsdictionary";

export default function Card(props) {
  return (
    <Link to={`/productPage/${props.data.id}`} className="w-56 m-5">
      <div className="ml-2">
        <div className="bg-gray-200 relative pt-5 h-9/10 overflow-hidden mr-2">
          <CategorySymbol icon={icons[props.data.icon]} length={8} />
          <img className=" m-auto h-40 w-full" src={props.data.imageUrl} />
        </div>
        <h1 className="h-min-16 text-left text-3xl">{props.data.title}</h1>
        <h1 className="">price {props.data.price}</h1>
        <h1 className="block bg-white">
          <Stars className="w-4" size="14px" rank={props.data["rank"]} />
        </h1>
        <span className="block bg-white">{props.data.productDescription}</span>
      </div>
    </Link>
  );
}
