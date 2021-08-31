import React from "react";

export default class PaymentArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNumber: 0,
      data: this.props.data,
      totalAmountItems: 0,
      totalprice: 0,
      totalpriceVat: 0,
      vat: 0,
    };
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  componentDidMount() {
    this.getTotalPrice();
  }

  static getDerivedStateFromProps(props, state) {
    // if (localStorage.getItem("items")) {
    //   this.getTotalPrice();
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps["data"] == nextState["data"]) {
      console.log("shiki");
    }
    return false;
  }

  getTotalPrice() {
    let totalAmountItems = 0;
    let totalprice = 0;
    let vat = 0;
    let totalpriceVat = 0;

    for (const item of this.state.data) {
      totalAmountItems += Number(item["quan"]);
      totalprice += this.convertUsdPriceToString(item) * Number(item["quan"]);
    }

    vat = Number(0.17 * totalprice).toFixed(2);
    totalpriceVat = Number(totalprice) + Number(vat);
    this.setState({
      totalAmountItems: totalAmountItems,
      totalprice: totalprice,
      vat: vat,
      totalpriceVat: totalpriceVat,
    });
  }

  convertUsdPriceToString(item) {
    let priceStringLength = item["Usdprice"].length;
    return Number(item["Usdprice"].substring(0, priceStringLength - 1));
  }

  render() {
    return (
      <div className="w-1/4 h-min-80  mr-8 bg-gray-100">
        <div className="h-12 font-bold text-4xl border-black border-b-2">
          total item {this.state["totalAmountItems"]}
        </div>
        <div className="flex justify-between">
          <h1>items</h1>
          <div> Quantity</div>
          <div>price</div>
        </div>
        <div>
          {this.state.data.map((item) => {
            return (
              <div className="flex justify-between">
                <div className="w-28 pt-4">{item["nameProduct"]}</div>
                <div>{item["quan"]}</div>
                <div>
                  {Number(item["quan"]) * this.convertUsdPriceToString(item)}$
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="mt-2">Sum</div>
          <div>{this.state.totalprice}</div>
        </div>
        <h1 className="h-12 pt-4 font-bold text-xl border-black border-b-2">
          shipping
        </h1>
        <div className="flex justify-between">
          <h1>VAT</h1>
          <h1>0.17%</h1>
          <div>{this.state["vat"]}</div>
        </div>
        <div className="flex justify-between border-b-2	border-black">
          <h1>Total</h1>
          <h1>{this.state["totalpriceVat"]}$</h1>
        </div>
        <div className="bg-red-500 hover:bg-yellow-500 cursor-pointer text-white text-center font-bold p-2">
          checkout
        </div>
      </div>
    );
  }
}
