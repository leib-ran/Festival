import { render } from "@testing-library/react";
import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ categories: data["categories"] });
      });
  }

  render() {
    let categories = {};
    return (
      <div>
        {this.props.filterData.forEach((product) => {
          if (this.state["categories"][product["category"]]) {
            categories[product["category"]] =
              this.state["categories"][product["category"]];
          }
        })}

        <div>
          {Object.keys(categories).map((product) => {
            return (
              <div key={product}>
                <h1 className="font-extrabold	 text-2xl">{product}</h1>
                {Object.keys(categories[product]).map((category) => {
                  return (
                    <div>
                      <h1 className="font-bold">{category}</h1>
                      {categories[product][category].map((subcat) => {
                        return (
                          <div>
                            <input
                              type="checkbox"
                              name={subcat}
                              className="mr-2"
                              onChange={(e) => {
                                this.props.selectBox(e.target);
                              }}
                            />
                            <span>{subcat}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
