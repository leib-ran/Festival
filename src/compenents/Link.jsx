import React from "react";

export default function Link(props) {
  return (
    <a className="cursor-pointer ml-2 h-full">
      <div className="h-16 w-16">
        <div
          className="bg-cover h-full w-full bg-no-repeat"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        >
          <div className="bg-gray-800 h-full w-full bg-opacity-40 align-middle text-center	">
            <h1 className="text-white opacity-false m-auto text-center">
              {props.linkName}
            </h1>
          </div>
        </div>
      </div>
    </a>
  );
}
