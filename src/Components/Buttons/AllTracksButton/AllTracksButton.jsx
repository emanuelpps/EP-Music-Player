import React, { useState } from "react";
import "./AllTracksButton.css";
import { BsArrowBarDown } from "react-icons/bs";
import { BsArrowBarUp } from "react-icons/bs";
import { useContext } from "react";
import { MusicContext } from "../../../Context/MusicContext";

export default function AllTracksButton() {
  const { showPlayListContainer, setShowPlaylistContainer } = useContext(MusicContext);

  


  function allTracksHandler() {
    const playlistContainerShow = document.getElementById(
      "playlistContainerId"
    );
    const cardPlayer = document.getElementById("cardPlayerId");
    const player = document.getElementById("playerId");

    // Verificar si el elemento existe antes de intentar acceder a sus propiedades
    if (playlistContainerShow) {
      playlistContainerShow.style.display = showPlayListContainer
        ? "none"
        : "block";
        playlistContainerShow.style.transition = showPlayListContainer
        ? "none"
        : "4s"
      cardPlayer.style.gridArea = showPlayListContainer
        ? "2 / 2 / 4 / 3"
        : "2 / 2 / 4 / 3";
        cardPlayer.style.transition = showPlayListContainer
      ? "none"
      : "easy-all"
      player.style.translate = showPlayListContainer
        ? "0px 0px"
        : "0px -400px";
      player.style.marginTop = showPlayListContainer
      ? "-30px"
      : "250px"
      player.style.borderRadius = showPlayListContainer
      ? "12px"
      : "12px"
       player.style.transition = showPlayListContainer
      ? "ease-out 1s"
      : "ease-out 1s"
    }
    setShowPlaylistContainer(!showPlayListContainer)
  }

  return (
    <div className="allTracksButton">
      <button className="allTrack-button buttonReset" onClick={allTracksHandler}>
        {showPlayListContainer ? <BsArrowBarDown /> : <BsArrowBarUp />}
      </button>
    </div>
  );
}
