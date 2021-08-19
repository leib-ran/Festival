import Card from "./Card";
import React from "react";

export default class CategoryArea extends React.Component {
  constructor() {
    super();
    this.state = {
      prodArr: [],
    };
  }

  componentDidMount() {
    fetch("/products.json")
      .then((res) => {
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        this.setState({ prodArr: products["data"] });
      });
  }

  render() {
    return (
      <div>
        <div className="flex flex wrap justify-center">
          {this.state.prodArr.map((element, index) => {
            return (
              <Card
                name={element["nameProduct"]}
                picture={element["photo"]}
              ></Card>
            );
          })}
        </div>
      </div>
    );
  }
}
