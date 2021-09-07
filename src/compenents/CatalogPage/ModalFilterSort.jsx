import React from "react";
import CategoryButton from "./ModalCategoryButton";

export default class ModalFilterSort extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`transition shadow-2xl	 duration-10000 ease-in-out w-${this.props.modalWidth} overflow-hidden`}
      >
        <div className="">
          <div className="flex bg-white  justify-between">
            <div></div>
            <div>Filter&Sort</div>
            <div>x</div>
          </div>
          <CategoryButton name="Flight" />
        </div>
      </div>
    );
  }
}
