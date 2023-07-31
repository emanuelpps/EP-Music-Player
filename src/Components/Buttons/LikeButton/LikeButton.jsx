import React, { useContext, useState, useEffect } from "react";
import "./LikeButton.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MusicContext } from "../../../Context/MusicContext";

export default function LikeButton() {
  const { addSongToPlaylist, songInfo, activeLikeButton,userPlaylist, streamSong } =  useContext(MusicContext);
  const [checkLikeButton, setCheckLikeButton] = useState("");

  useEffect(() => {
    const inPlaylist = userPlaylist.find((track) => track.id === songInfo.id)
      ? true
      : false;
    // Actualizar el estado del botón cada vez que activeLikeButton cambie
    if (inPlaylist) {
      setCheckLikeButton(<FaHeart className="likeButtonFill" />);
    } else {
      setCheckLikeButton(<FaRegHeart />);
    }
  }, [streamSong, activeLikeButton, checkLikeButton]);

  return (
    <div>
      <button
        className="buttonReset likeButton m-2"
        onClick={() => addSongToPlaylist(songInfo?.id)}
      >
        {checkLikeButton}
      </button>
    </div>
  );
}
