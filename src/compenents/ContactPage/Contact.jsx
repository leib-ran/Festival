import React from "react";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

export default class Contact extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="flex justify-center">
          <ContactForm />
          <div className="w-96 h-96 filter overflow-hidden invert">
            <ContactMap></ContactMap>
          </div>
        </div>
        <div className="font-bold text-center">
          <div>Isreal Offices</div>
          <p>Ygal alon St</p>
          <p>Tel Aviv 190909,Israel</p>
        </div>
      </div>
    );
  }
}
