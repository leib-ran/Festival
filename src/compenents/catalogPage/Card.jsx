import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="bg-red-800 mr-2 h-36 w-40">
        <h1>{props.name}</h1>
        <img src={props.picture} />
      </div>
    </div>
  );
}
