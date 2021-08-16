import React from "react";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      nothing: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Hally mally</h1>
      </div>
    );
  }
}
