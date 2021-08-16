import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="flex">
      <input placeholder="search" />
      <Logo></Logo>
    </div>
  );
}
