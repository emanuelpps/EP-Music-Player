import React, { useContext, useState, useEffect } from "react";
import "./LikeButton.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MusicContext } from "../../../Context/MusicContext";
import { motion } from "framer-motion"

export default function LikeButton() {
  const { addSongToPlaylist, songInfo, activeLikeButton, userPlaylist, streamSong } =  useContext(MusicContext);
  const [checkLikeButton, setCheckLikeButton] = useState(false);

  useEffect(() => {
    const inPlaylist = userPlaylist.some((track) => track.id === songInfo.id);
    setCheckLikeButton(inPlaylist);
  }, [userPlaylist, songInfo.id]);

  const handleLikeButtonClick = () => {
    addSongToPlaylist(songInfo?.id);
  };

  return (
    <div>
      <motion.button
        className="buttonReset likeButton m-2"
        onClick={handleLikeButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {checkLikeButton ? <FaHeart className="likeButtonFill" /> : <FaRegHeart />}
      </motion.button>
    </div>
  );
}
