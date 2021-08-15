import React from "react";

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      ran: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}
