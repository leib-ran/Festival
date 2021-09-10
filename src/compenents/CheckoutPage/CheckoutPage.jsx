import React from "react";
import FormPart from "../Form/FormPart";
export default class CheckoutPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="h-">
        <FormPart buttonValue="checkout" formName="Conact Us" />
      </div>
    );
  }
}
