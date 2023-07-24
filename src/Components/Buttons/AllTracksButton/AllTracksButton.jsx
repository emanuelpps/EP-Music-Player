import React from "react";
import "./AllTracksButton.css"
import { CgPushChevronDownO } from "react-icons/cg";

export default function AllTracksButton() {
  return (
    <div className="allTracksButton">
      <button className="buttonReset">
        <CgPushChevronDownO />
      </button>
    </div>
  );
}
