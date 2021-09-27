import React, { useState } from "react";
import { addOne, addOneWithlimit, addWord, subOne } from "../../helper/config";

export default function Carousel(props) {
  const initialshow = props.show || 0;
  const [show, setShow] = useState(initialshow);
  const slideNumber = props.children.length;
  const [index, setIndex] = useState(0);

  return (
    <div className="flex">
      {index != 0 && (
        <div
          className=" text-5xl  left-2 cursor-pointer z-10"
          onClick={(e) => {
            setIndex(subOne(index));
          }}
        >
          &#8249;
        </div>
      )}
      <div className="flex w-full justify-center  overflow-hidden">
        <div className="transition   ml-auto mr-auto flex relative">
          <div
            className={`flex transform duration-1000 ease-in-out`}
            style={{
              transform: `translateX(-${index * (1 / props.show) * 100}%)`,
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
      {console.log(slideNumber)}

      {index != slideNumber - props.show && (
        <div
          className="text-5xl  right-2  cursor-pointer bg-white  z-10 right-2 inset-y-2/4 align-middle	"
          onClick={(e) => {
            setIndex(addOneWithlimit(index, slideNumber - props.show));
          }}
        >
          &#8250;
        </div>
      )}
    </div>
  );
}
