import React from "react";

export default class FormPart extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <div className="flex">
            <label className="w-36" placeholder="">
              first name
            </label>
            <input type="text" className="border-2 border-black" />
            <label className="w-36" placeholder="">
              last name
            </label>
            <input className="border-2 border-black" type="text" />
          </div>
          <label className="w-36" placeholder=""></label>
          <input className="border-2 border-black" type="text" />
          <label>Address</label>
          <input type="text"></input>
          <label>Country/Region</label>
          <input type="text" />
          <label>state</label>
          <input type="text"></input>
          <label>Email address</label>
          <input type="text" />
          <label>passward</label>
          <input type="submit" value="ran" />
        </form>
      </div>
    );
  }
}
