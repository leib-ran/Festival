import React from "react";
import ContactMap from "./ContactMap";

export default class Contact extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="flex justify-center">
          <div className="w-96">ran</div>
          <div className="w-96 h-96 filter overflow-hidden invert">
            <ContactMap></ContactMap>
          </div>
        </div>
      </div>
    );
  }
}
