import React from "react";

export default function Card(props) {
  console.log(props.data);
  return (
    <div>
      <div className="bg-red-800 mr-2 h-36 w-40">
        <h1 className="h-8">{props.data.nameProduct}</h1>
        <img className="h-40" src={props.data.photo} />
        <h1 className="bg-yellow-400">price {props.data.Usdprice}</h1>
        <span>{props.data.description}</span>
      </div>
    </div>
  );
}
