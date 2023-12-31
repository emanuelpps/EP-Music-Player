import React from "react";
import "./CardPlayer.css";
import CardArtist from "../CardArtist/CardArtist";
import Player from "../Player/Player";

export default function CardPlayer() {
  return (
    <div id="cardPlayerId" className="cardPlayer">
      <CardArtist />
      <Player/>
    </div>
  );
}
