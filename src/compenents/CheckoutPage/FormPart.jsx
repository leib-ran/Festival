import React from "react";
import {
  isEmailValid,
  isNameValid,
  isAddressValid,
} from "../../helper/validation";

export default class FormPart extends React.Component {
  constructor() {
    super();
    this.state = {
      validObj: {},
    };
    this.handelchange = this.handelchange.bind(this);
  }

  handelchange(e) {
    let objNames = {
      firstname: isNameValid,
      emaliAddress: isAddressValid,
    };
    let errorsmessage = {
      firstname: "the name is filled wrong only alpha betic nospaces",
      lastname: "the name is filled wrong only alpha betic nospaces",
    };
    let validObj = { ...this.state.validObj };
    let nameComponent = e.target.name;
    let flag = true;
    if (!objNames[nameComponent]()) {
      validObj[nameComponent] = false;
    }
    this.setState({ validObj: validObj });
  }

  render() {
    return (
      <div className="w-1/3 m-auto">
        <form>
          <div className="">
            <div className="text-5xl text-center mb-10">Checkout Form</div>
            <div className="flex justify-between">
              <div>
                <label className="w-36" placeholder="">
                  first name
                </label>
                <input
                  name="firstname"
                  type="text"
                  className="border-2 border-black"
                />
              </div>

              <div>
                <label className="w-36">last name</label>
                <input
                  name="lastName"
                  className="border-2 border-black"
                  type="text"
                  placeholder="Enter firstname and fullname"
                />
              </div>
            </div>
          </div>
          <label>Address</label>
          <input
            className="border-2 border-black"
            name="address"
            type="text"
          ></input>
          <label>Country/Region</label>
          <input className="border-2 border-black" name="country" type="text" />
          <label>state</label>
          <input type="text"></input>

          <label>zipcode</label>
          <input
            className="border-2 border-black"
            name="zipcode"
            type="text"
          ></input>
          <label>Email address</label>
          <input
            name="emaliAddress"
            className="border-2 border-black"
            type="text"
          />
          <label>passward</label>
          <input className="border-2 border-black" type="submit" value="ran" />
        </form>
      </div>
    );
  }
}
