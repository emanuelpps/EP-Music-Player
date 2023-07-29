import React, { useContext } from "react";
import "./LikeButton.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MusicContext } from "../../../Context/MusicContext";

export default function LikeButton() {
  const { addSongToPlaylist, songInfo, activeLikeButton } =
    useContext(MusicContext);

  return (
    <div>
      <button
        className="buttonReset likeButton m-2"
        onClick={() => addSongToPlaylist(songInfo?.id)}
      >
        {activeLikeButton ? <FaHeart className="likeButtonFill" /> : <FaRegHeart />}
      </button>
    </div>
  );
}
