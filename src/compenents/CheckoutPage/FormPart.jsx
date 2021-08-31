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
        </form>
      </div>
    );
  }
}
