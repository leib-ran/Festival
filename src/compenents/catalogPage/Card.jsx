import { Link } from "react-router-dom";
import Page from "../productPage/Page";

export default function Card(props) {
  return (
    <Link
      to={`/productPage/${props.data.nameProduct}`}
      render={() => <Page data={props.data}></Page>}
    >
      <div className="h-10px">
        <div className="bg-red-800 mr-2 w-40" style={{}}>
          <h1 className="h-8 text-center text-white">
            {props.data.nameProduct}
          </h1>
          <img className="h-40" src={props.data.photo} />
          <h1 className="bg-yellow-400">price {props.data.Usdprice}</h1>
          <h1 className="block bg-white">rank: {props.data.rank}</h1>
          <span className="block bg-white">{props.data.description}</span>
        </div>
      </div>
    </Link>
  );
}
