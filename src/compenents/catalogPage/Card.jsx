import { Link } from "react-router-dom";
import Page from "../productPage/Page";

export default function Card(props) {
  return (
    <Link to={`/productPage/${props.data.nameProduct}`} Component={Page}>
      <div>
        <div className="bg-red-800 mr-2 h-36 w-40">
          <h1 className="h-8 text-center text-white">
            {props.data.nameProduct}
          </h1>
          <img className="h-40" src={props.data.photo} />
          <h1 className="bg-yellow-400">price {props.data.Usdprice}</h1>
          <h1 className="">rank: {props.data.rank}</h1>
          <span className="block">{props.data.description}</span>
        </div>
      </div>
    </Link>
  );
}
