import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.addOne = this.addOne.bind(this);
    this.subMinus = this.subMinus.bind(this);
  }

  addOne() {
    let newAmount = this.state.amount + 1;
    this.setState({ amount: newAmount });
  }
  subMinus() {
    let newAmount = this.state.amount <= 0 ? 0 : this.state.amount - 1;
    this.setState({ amount: newAmount });
  }

  render() {
    return (
      <div className="border-2 h-40 shadow-lg w-2/3">
        <div className="flex h-full justify-between">
          <img className="w-24 h-2/3" src={this.props.data["photo"]} />
          <div className="ml-2">
            <h1 className="font-bold">{this.props.data["nameProduct"]}</h1>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              dolorum deleniti quasi, similique fugit eius sit consectetur
              reprehenderit? Mollitia quisquam distinctio alias corporis
              obcaecati suscipit optio, soluta aliquam illum quia.
              <div className="flex">
                <div>Qty</div>
                <div className="cursor-pointer" onClick={this.addOne}>
                  +
                </div>
                <div
                  className="border-2 border-black h-6"
                  //   onChange={(e) => {
                  //     let priceString = this.props.data["Usdprice"];
                  //     let price = priceString.substring(
                  //       0,
                  //       priceString.length - 1
                  //     );
                  //     return this.props.setPrice(e.target, price);
                  //   }}
                >
                  {this.state.amount}
                </div>
                <div className="cursor-pointer" onClick={this.subMinus}>
                  -
                </div>
              </div>
              <div className="bg-red-600 w-36 font-bold text-center text-white">
                Remove
              </div>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
