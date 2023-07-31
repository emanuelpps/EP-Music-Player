import React, { useState } from "react";
import "./AllTracksButton.css";
import { BsArrowBarDown } from "react-icons/bs";
import { BsArrowBarUp } from "react-icons/bs";
import { useContext } from "react";
import { MusicContext } from "../../../Context/MusicContext";

export default function AllTracksButton({allTracksHandler}) {
  const { showPlayListContainer, setShowPlaylistContainer} =
    useContext(MusicContext);


  return (
    <div className="allTracksButton">
      <button
        className="allTrack-button buttonReset"
        onClick={() => setShowPlaylistContainer(!showPlayListContainer)}
      >
        {showPlayListContainer ? (
          <BsArrowBarDown className="arrowBar" />
        ) : (
          <BsArrowBarUp className="arrowBar" />
        )}
      </button>
    </div>
  );
}
