import React from "react";

export default class FormPart extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handelchange(e) {}

  render() {
    return (
      <div>
        <form>
          <div className="flex-col">
            <label className="w-36" placeholder="">
              first name
            </label>
            <input
              name="fullname"
              type="text"
              className="border-2 border-black"
            />
            <label className="w-36">last name</label>
            <input
              name="lastName"
              className="border-2 border-black"
              type="text"
              placeholder="Enter firstname and fullname"
            />
          </div>
          <label>Address</label>
          <input name="address" type="text"></input>
          <label>Country/Region</label>
          <input name="country" type="text" />
          <label>state</label>
          <input type="text"></input>

          <label>zipcode</label>
          <input name="zipcode" type="text"></input>
          <label>Email address</label>
          <input type="text" />
          <label>passward</label>
          <input type="submit" value="ran" />
        </form>
      </div>
    );
  }
}
