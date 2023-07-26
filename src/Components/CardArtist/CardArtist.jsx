import React, { useContext } from "react";
import "./CardArtist.css";
import LikeButton from "../Buttons/LikeButton/LikeButton";
import MenuButton from "../Buttons/MenuButton/MenuButton";
import SongImage from "./SongImage";
import { MusicContext } from "../../Context/MusicContext";

export default function CardArtist() {
  const { songInfo } = useContext(MusicContext);

  return (
    <div className="CardArtist text-center">
      <div className="addSong">
        <LikeButton />
      </div>
      <div className="trackTitle">
        <h3 className="mt-3">{songInfo?.title}</h3>
        <h5 className="song-Title">{songInfo?.user?.name}</h5>
      </div>
      <div className="menu">
        <MenuButton />
      </div>
      <div id="trackImageId" className="trackImage">
        <SongImage />
      </div>
    </div>
  );
}
