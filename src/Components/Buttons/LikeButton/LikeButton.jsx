import React, { useContext, useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { MusicContext } from "../../../Context/MusicContext";
import "./LikeButton.css";

export default function LikeButton() {
  const {
    addSongToPlaylist,
    songInfo = {},
    userPlaylist,
  } = useContext(MusicContext);

  const [checkLikeButton, setCheckLikeButton] = useState(false);

  useEffect(() => {
    try {
      const inPlaylist =
        songInfo?.id && userPlaylist.some((track) => track.id === songInfo.id);
      setCheckLikeButton(inPlaylist);
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [userPlaylist, songInfo.id]);

  const handleLikeButtonClick = () => {
    try {
      addSongToPlaylist(songInfo?.id);
    } catch (error) {
      console.error("Error in handleLikeButtonClick:", error);
    }
  };

  return (
    <div>
      <motion.button
        className="buttonReset likeButton m-2"
        onClick={handleLikeButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {checkLikeButton ? (
          <FaHeart className="likeButtonFill" />
        ) : (
          <FaRegHeart />
        )}
      </motion.button>
    </div>
  );
}
