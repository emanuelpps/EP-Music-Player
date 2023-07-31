import React, { useContext } from "react";
import "./PlayListContainer..css";
import { MusicContext } from "../../Context/MusicContext";
import Playlist from "./Playlist";
import { motion, AnimatePresence } from "framer-motion";

export default function PlayListContainer() {
  const { playlistTracks, showPlayListContainer } = useContext(MusicContext);
  return (
    <>
      <AnimatePresence>
        {showPlayListContainer ? (
          <motion.div
            key="playContainer"
            id="playlistContainerId"
            className="playListContainer"
            initial={{ y: -120 }}
            animate={{ y: 5, type: "ease-in", duration: "5" }}
            transition={{ duration: 0.5 }}
            exit={{ y: -120, type: "ease-in", duration: "5", delay: 5 }}
          >
            {playlistTracks?.map((item, index) => (
              <Playlist key={index} id={item.id} musicPlaylistTracks={item} />
            ))}
          </motion.div>
        ) : (
          <div></div>
        )}
      </AnimatePresence>
    </>
  );
}
