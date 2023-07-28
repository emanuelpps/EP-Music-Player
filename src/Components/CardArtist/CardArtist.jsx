import React, { useContext, useEffect, useState } from "react";
import "./CardArtist.css";
import LikeButton from "../Buttons/LikeButton/LikeButton";
import MenuButton from "../Buttons/MenuButton/MenuButton";
import SongImage from "./SongImage";
import { MusicContext } from "../../Context/MusicContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CardArtist() {
  const { songInfo, isPlaying } = useContext(MusicContext);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    // Cuando cambie el valor de isPlaying, actualizamos el estado de rotate
    setRotate(isPlaying);
  }, [isPlaying]);

  console.log("isPlaying:", isPlaying);
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
        <MenuButton mode="wait" initial={false}/>
      </div>
      <div id="trackImageId" className="trackImage">
        <div className="loader" >
          <AnimatePresence mode="popLayout">
            {rotate ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                }}
                exit={{
                  duration: 0.5,
                  delay: 0.5
                }}
              >
                <SongImage />
              </motion.div>
            ) : (
              <SongImage />
            )}
          </AnimatePresence>
          <div className="blue"></div>
        </div>
      </div>
    </div>
  );
}
