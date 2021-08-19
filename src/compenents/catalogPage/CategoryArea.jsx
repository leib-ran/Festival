import Card from "./Card";
import React from "react";

export default class CategoryArea extends React.Component {
  constructor() {
    super();
    this.state = {
      prodArr: [],
      prodsrc: [],
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
        this.setState({ prodArr: products["data"], prodsrc: products["data"] });
      });
  }

  render() {
    return (
      <div>
        <div className="flex flex wrap justify-center">
          {this.state.prodArr.map((element, index) => {
            return (
              <Card
                key={index}
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
