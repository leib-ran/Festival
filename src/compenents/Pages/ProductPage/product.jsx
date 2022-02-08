import React, { useState } from "react";
import { ProductImages } from "./ProductImages";
import { ProductDescription } from "./ProductDescription";

export default function Product(props) {
  return (
    <div>
      {props.data && (
        <div>
          <div className=" bg-white opacity-90  w-136 m-auto text-center ">
            <div className="mt-5 cursor-default">
              <div className="flex justify-center">
                <ProductImages data={props.data} />
                <div className="ml-4">
                  <ProductDescription data={props.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
