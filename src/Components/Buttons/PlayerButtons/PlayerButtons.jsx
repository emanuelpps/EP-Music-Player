import React from "react";
import "./PlayerButtons.css";
import { CgPlayButtonO } from "react-icons/cg";
//import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayTrackNextO } from "react-icons/cg";
import { CgPlayTrackPrevO } from "react-icons/cg";
import { CgPlayStopO } from "react-icons/cg";

export default function PlayerButtons() {
  return (
    <div className="playerButtons">
      <button className="buttonReset playerButton mx-3">
        <CgPlayTrackPrevO />
      </button>
      <button className="buttonReset playerButton mx-3">
        <CgPlayButtonO />
      </button>
      <button className="buttonReset playerButton mx-3">
        <CgPlayStopO />
      </button>
      <button className="buttonReset playerButton mx-3">
        <CgPlayTrackNextO />
      </button>
    </div>
  );
}
