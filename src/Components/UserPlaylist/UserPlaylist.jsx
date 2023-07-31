import React, { useContext } from "react";
import "./UserPlaylist.css";
import BackPlaylistButton from "../Buttons/BackPlaylistButton/BackPlaylistButton";
import { MusicContext } from "../../Context/MusicContext";
import MyPlaylist from "./MyPlaylist";
import { motion, AnimatePresence } from "framer-motion";

export default function UserPlaylist() {
  const { userPlaylist, showUserPlaylist } = useContext(MusicContext);

  console.log(showUserPlaylist);

  return (
    <>
      <AnimatePresence>
        {showUserPlaylist ? (
          <motion.div
            key="userPlaylist"
            className="userPlaylist"
            initial={{ x: -300 }}
            animate={{ x: 0, type: "ease-in", duration: "5" }}
            transition={{ duration: 0.5 }}
            exit={{ x: -300, type: "ease-in", duration: "5", delay: 5 }}
          >
            <div className="userPlaylistTitle">
              <div className="titleMyPlaylist">
                <h5>My Playlist</h5>
              </div>
              <div className="buttonBack">
                <BackPlaylistButton />
              </div>
            </div>
            <div className="myplaylist">
              {userPlaylist?.map((track, index) => (
                <MyPlaylist
                  key={index}
                  id={track.id}
                  myPlaylistTracks={track}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <div></div>
        )}
      </AnimatePresence>
    </>
  );
}
