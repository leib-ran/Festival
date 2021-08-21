import React from "react";

export default function Filter(props) {
  let categories = {};
  props.filterData.forEach((product) => {
    Object.keys(product["categories"]).forEach((category) => {
      if (categories[category] == undefined) {
        categories[category] = new Set([product["categories"][category]]);
      } else {
        categories[category].add(product["categories"][category]);
      }
    });
  });
  return (
    <div className="bg-red-200">
      {Object.keys(categories).map((categoryName) => {
        return (
          <div>
            <h1 className="font-bold">{categoryName}</h1>
            {console.log(categories[categoryName])}
            {[...categories[categoryName]]
              .filter((e) => e)
              .map((category) => {
                return (
                  <div>
                    {" "}
                    <input type="checkbox" />
                    <span>{category}</span>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
