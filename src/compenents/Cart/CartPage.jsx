import React from "react";
import { getItemsStorage } from "../../helper/config";
import ItemsList from "./ItemsList";
import PaymentArea from "./PaymentArea";

export default class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItemsStorage(),
    };
  }

  render() {
    return (
      <div>
        <div className="bg-gray-100 pt-4 pb-4 text-center mt-20 text-3xl font-medium	">
          {getCartTitleName()}
        </div>
        <div className="md:flex md:justify-center ">
          <div className="md:w-136 w-full mt-2 mr-4	">
            <ItemsList />
          </div>
          <PaymentArea data={JSON.parse(this.state.items)} />
        </div>
      </div>
    );
  }
}

const getCartTitleName = () => {
  return "Cart";
};
