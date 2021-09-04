import React from "react";
import ContactMap from "./ContactMap";

export default class Contact extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="flex justify-between">
          <ContactMap></ContactMap>
        </div>
      </div>
    );
  }
}
