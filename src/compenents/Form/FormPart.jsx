import React from "react";
import Field from "./Field";
import { isNameValid } from "../../helper/validation";
import validationFuncs from "../../helper/validation";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";

export default class FormPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      show: false,
      errors: {},
      opacity: 100,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandel = this.submitHandel.bind(this);
    this.filterWantedFiels = this.filterWantedFiels.bind(this);
  }

  componentDidMount() {
    fetch("/formCheckout.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let feildsArr = res["data"][0];
        let wantedFields = this.filterWantedFiels(feildsArr);
        let errors = this.fillRequireError(wantedFields);
        this.setState({ fields: wantedFields, errors: errors });
      });
  }

  filterWantedFiels(feildsArr) {
    let filteredFields = [];
    if (this.props.fieldArr == undefined) {
      return feildsArr;
    } else {
      this.props.fieldArr.map((element, index) => {
        filteredFields.push(feildsArr[element]);
      });
    }
    return filteredFields;
  }

  submitHandel(e) {
    e.preventDefault();
    this.setState({ show: true, opacity: 0 });
  }

  fillRequireError(feildsArr) {
    let errors = {};
    Object.values(feildsArr).map((field) => {
      if (field["required"]) {
        errors[field["fieldName"]] = this.require();
      }
    });
    return errors;
  }

  changeHandler(e) {
    let feildName = e.target.name;
    let errors = { ...this.state.errors } || "";
    let feild = this.state.fields[feildName];
    let feildValidations = feild["validation"];

    if (e.target.value == "") {
      errors[feildName] = this.require();
    } else {
      errors[feildName] = "";
    }

    for (let index = 0; index < feildValidations.length; index++) {
      if (!validationFuncs[feildValidations[index]](e.target.value)) {
        errors[feildName] = feild["msgError"][index];
      }
    }

    this.setState({ errors: errors });
  }

  require() {
    return "This field is required to be filled";
  }

  render() {
    return (
      <div>
        <form className="m-auto" action="">
          <div className="m-auto text-center font-bold text-4xl">
            Checkout Form
          </div>
          <div className="w-1/3 m-auto mt-4">
            <div className="flex flex-wrap justify-between">
              {Object.values(this.state["fields"]).map((field) => {
                return (
                  <Field
                    name={field["fieldName"]}
                    changeHandler={this.changeHandler}
                    msg={this.state.errors[field["fieldName"]] || ""}
                    show={this.state.show}
                    classNameField={`delay-10000 transition opacity-${this.state.opacity} ease-in-out`}
                  ></Field>
                );
              })}
            </div>
            <div className="m-auto mt-4 w-40">
              <button
                className={`bg-red-500 text-white border-black border-2`}
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
