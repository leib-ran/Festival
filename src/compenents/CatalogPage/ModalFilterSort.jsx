import React from "react";

export default class ModalFilterSort extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`transition duration-10000 ease-in-out w-${this.props.modalWidth} overflow-hidden`}
      >
        <div className="flex"></div>
      </div>
    );
  }
}
