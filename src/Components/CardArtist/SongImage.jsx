import React, { useContext } from "react";
import "./SongImage.css";
import { MusicContext } from "../../Context/MusicContext";
import NoSongImage from "../../Assets/Images/ep-music.png";

export default function SongImage() {
  const { songInfo = {} } = useContext(MusicContext);
  return songInfo.artwork ? (
    <img
      src={songInfo?.artwork?.["150x150"]}
      alt={songInfo?.title}
      className="songImage"
    />
  ) : (
    <img src={NoSongImage} alt={songInfo?.title} className="songImage" />
  );
}
