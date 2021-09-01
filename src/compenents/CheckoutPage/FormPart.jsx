import React from "react";
import Field from "./Field";
import { isNameValid } from "../../helper/validation";

export default class FormPart extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: [],
      show: true,
      errors: {},
    };
    this.changeHandler.bind(this);
  }

  componentDidMount() {
    fetch("/formCheckout.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ fields: res["data"] });
      });
  }

  submitHandel(e) {
    e.preventDefault();
  }

  changeHandler(e) {
    let feildName = e.target.name;
    let errors = { ...this.state.errors };
    if (e.target.value == "") {
      errors[feildName] = this.fields[feildName].required;
    }
  }

  render() {
    return (
      <div>
        <form className="m-auto" action="">
          <div className="m-auto text-center font-bold text-4xl">
            Checkout Form
          </div>
          <div className="w-1/3 m-auto mt-4">
            <div className="flex">
              {this.state["fields"].map((field) => {
                return (
                  <Field
                    name={field["fieldName"]}
                    changeHandler={this.changeHandler}
                    msg={this.state.errors}
                  ></Field>
                );
              })}
            </div>
            <div className="m-auto mt-4 w-40">
              <button
                className="bg-red-500 text-white border-black border-2"
                onClick={this.submitHandel}
              >
                Checkout
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
