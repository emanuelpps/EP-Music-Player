import React, { useContext, useState, useEffect } from "react";
import "./LikeButton.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MusicContext } from "../../../Context/MusicContext";
import { motion } from "framer-motion"

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
      <motion.button
        className="buttonReset likeButton m-2"
        onClick={() => addSongToPlaylist(songInfo?.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {checkLikeButton}
      </motion.button>
    </div>
  );
}
