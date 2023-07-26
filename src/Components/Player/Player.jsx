import React from "react";
import "./Player.css";
import AllTracksButton from "../Buttons/AllTracksButton/AllTracksButton";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

export default function Player() {
  return (
    <div id="playerId" className="player">
      <MusicPlayer/>
      <AllTracksButton />
    </div>
  );
}
