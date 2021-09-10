import { Link } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage";
import BeautyStars from "beauty-stars";

export default function Card(props) {
  return (
    <Link
      to={`/productPage/${props.data.nameProduct}`}
      render={() => <ProductPage data={props.data}></ProductPage>}
      className="w-56 m-5"
    >
      <div className="ml-2">
        <div
          className="bg-gray-200 pt-5 h-9/10 overflow-hidden mr-2"
          style={{}}
        >
          <img className=" m-auto h-40 w-full" src={props.data.photo} />
        </div>
        <h1 className="h-min-16 text-left text-3xl">
          {props.data.nameProduct}
        </h1>
        <h1 className="">price {props.data.Usdprice}</h1>
        <h1 className="block bg-white">
          <BeautyStars className="w-4" size="14px" value={props.data["rank"]} />
        </h1>
        <span className="block bg-white">{props.data.description}</span>
      </div>
    </Link>
  );
}
