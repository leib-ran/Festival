import { Link } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage";

export default function Card(props) {
  return (
    <Link
      to={`/productPage/${props.data.nameProduct}`}
      render={() => <ProductPage data={props.data}></ProductPage>}
      className="w-1/2"
    >
      <div className="ml-2">
        <div
          className="bg-gray-200 pt-5 h-9/10 overflow-hidden mr-2"
          style={{}}
        >
          <img className=" m-auto w-full" src={props.data.photo} />
        </div>
        <h1 className="h-8 text-left text-3xl">{props.data.nameProduct}</h1>
        <h1 className="">price {props.data.Usdprice}</h1>
        <h1 className="block bg-white">rank: {props.data.rank}</h1>
        <span className="block bg-white">{props.data.description}</span>
      </div>
    </Link>
  );
}
