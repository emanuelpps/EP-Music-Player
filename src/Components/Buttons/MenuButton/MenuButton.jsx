import React, { useContext } from "react";
import "./MenuButton.css";
import { FaAlignJustify } from "react-icons/fa";
import { MusicContext } from "../../../Context/MusicContext";
import { motion } from "framer-motion";

export default function MenuButton() {
  const { showUserPlaylist, setShowUserPlaylist } = useContext(MusicContext);

  const showMyPlaylist = () => {
    setShowUserPlaylist(!showUserPlaylist);
  };

  return (
    <div className="dorpdown m-2">
      <motion.button
        className="buttonReset menuButton"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaAlignJustify />
      </motion.button>
      <ul class="dropdown-menu">
        <li>
          <button
            class="dropdown-item"
            href="#"
            onClick={() => showMyPlaylist()}
          >
            My Playlist
          </button>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            More About Me
          </a>
        </li>
      </ul>
    </div>
  );
}
