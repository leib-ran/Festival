import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Form>
          <div className="flex">
            <label className="w-36" placeholder="">
              first name
            </label>
            <input type="text" />
            <label className="w-36" placeholder="">
              last name
            </label>
            <input type="text" />
          </div>
        </Form>
      </div>
    );
  }
}
