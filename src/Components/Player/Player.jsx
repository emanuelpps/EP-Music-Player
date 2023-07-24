import React from "react";
import "./Player.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import TimeProgress from "../TimeProgress/TimeProgress";
import TotalTime from "../TotalTime/TotalTime";
import PlayerButtons from "../Buttons/PlayerButtons/PlayerButtons";
import AllTracksButton from "../Buttons/AllTracksButton/AllTracksButton";

export default function Player() {
  return (
    <div className="player">
      <TimeProgress/>
      <ProgressBar/>
      <TotalTime/>
      <PlayerButtons/>
      <AllTracksButton/>
    </div>
  );
}
