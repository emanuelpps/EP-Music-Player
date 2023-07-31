import React, { useContext, useEffect, useState } from "react";
import "./Player.css";
import AllTracksButton from "../Buttons/AllTracksButton/AllTracksButton";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { MusicContext } from "../../Context/MusicContext";
import { motion } from "framer-motion";

export default function Player() {
  const { showPlayListContainer } = useContext(MusicContext);
  const [showPlayerAnimation, setPlayerAnimation] = useState(true);
  const [animationShown, setAnimationShown] = useState(0);

  useEffect(() => {
    if (showPlayListContainer) {
      setAnimationShown(-110);
    } else {
      setAnimationShown(0);
    }
  }, [showPlayListContainer]);

  return (
    <>
      {showPlayerAnimation && (
        <motion.div
          id="playerId"
          className="player"
          key="player"
          initial={{ y: 0 }}
          animate={{ y: animationShown, type: "ease-in", duration: 5 }}
          transition={{ duration: 0.5 }}
        >
          <MusicPlayer />
          <AllTracksButton />
        </motion.div>
      )}
    </>
  );
}
