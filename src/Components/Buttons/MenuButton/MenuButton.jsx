import React from "react";
import "./MenuButton.css";
import { TiThMenuOutline } from "react-icons/ti";

export default function MenuButton() {
  return (
    <div>
      <button className="buttonReset menuButton">
        <TiThMenuOutline />
      </button>
    </div>
  );
}
