import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: Number(this.props.data["quan"]),
    };
    this.addOne = this.addOne.bind(this);
    this.subMinus = this.subMinus.bind(this);
    this.remove = this.remove.bind(this);
  }

  addOne() {
    let newAmount = this.state.amount + 1;
    this.setState({ amount: newAmount });
  }
  subMinus() {
    let newAmount = this.state.amount <= 0 ? 0 : this.state.amount - 1;
    this.setState({ amount: newAmount });
  }

  remove() {
    let index = this.props.index;
    let storage = JSON.parse(localStorage.getItem("items"));
    let quan = localStorage.getItem("quan");
    let item = storage[index];
    quan = Number(quan) - Number(item["quan"]);
    storage = storage.slice(0, index).concat(storage.slice(index + 1));
    console.log(storage);
    localStorage.setItem("items", storage);
    localStorage.setItem("quan", quan);
    this.props.setItems();
  }

  render() {
    return (
      <div className="border-2 h-min-40 shadow-lg md:w-2/3 w-full">
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
                <div className="border-2 border-black h-6">
                  {this.state.amount}
                </div>
                <div className="cursor-pointer" onClick={this.subMinus}>
                  -
                </div>
              </div>
              <div
                className="bg-red-600 w-36 font-bold text-center text-white"
                onClick={this.remove}
              >
                Remove
              </div>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
