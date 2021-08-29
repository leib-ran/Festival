import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

export default class ToggelCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: "hidden",
    };
    this.openFliterSort = this.openFliterSort.bind(this);
  }

  openFliterSort() {
    let show = this.state.show === "" ? "hidden" : "";
    this.setState({ show: show });
  }

  render() {
    return (
      <div>
        <div onClick={this.openFliterSort} className="cursor-pointer">
          <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>
          Sort & Filter
        </div>
        <div className={`${this.state.show} w-1/3 `}>ran</div>
      </div>
    );
  }
}
