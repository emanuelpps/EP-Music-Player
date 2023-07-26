import React, { useContext, useState } from "react";
import "./PlayerButtons.css";
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayTrackNextO } from "react-icons/cg";
import { CgPlayTrackPrevO } from "react-icons/cg";
import { CgPlayStopO } from "react-icons/cg";
import { MusicContext } from "../../../Context/MusicContext";

export default function PlayerButtons() {
  const { streamSong, isPlaying, playingButton } = useContext(MusicContext);


  return (
    <div className="playerButtons">
      <button className="buttonReset playerButton mx-3">
        <CgPlayTrackPrevO />
      </button>
      {!isPlaying ? (
        <button
          className="buttonReset playerButton mx-3 playButton"
          onClick={playingButton}
        >
          <CgPlayButtonO />
        </button>
      ) : (
        <button
          className="buttonReset playerButton mx-3 playButton"
          onClick={playingButton}
        >
          <CgPlayPauseO />
        </button>
      )}
      <button className="buttonReset playerButton mx-3">
        <CgPlayStopO />
      </button>
      <button className="buttonReset playerButton mx-3">
        <CgPlayTrackNextO/>
      </button>
    </div>
  );
}
