import React from "react";
import "./CardArtist.css";
import LikeButton from "../Buttons/LikeButton/LikeButton";
import MenuButton from "../Buttons/MenuButton/MenuButton";
import SongImage from "./SongImage";

export default function CardArtist() {
  return (
    <div className="CardArtist text-center">
      <div className="addSong">
        <LikeButton />
      </div>
      <div className="trackTitle">
        <h2 className="mt-3">Song Title</h2>
        <h5>Artist</h5>
      </div>
      <div className="menu">
        <MenuButton />
      </div>
      <div className="trackImage">
        <SongImage />
      </div>
    </div>
  );
}
