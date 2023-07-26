import React, { useState } from "react";
import "./AllTracksButton.css";
import { CgPushChevronDownO } from "react-icons/cg";
import { CgPushChevronUpO } from "react-icons/cg";

export default function AllTracksButton() {
  const [showPlayListContainer, setShowPlaylistContainer] = useState(false);

  function allTracksHandler() {
    const playlistContainerShow = document.getElementById(
      "playlistContainerId"
    );
    const trackImage = document.getElementById("trackImageId");
    const cardPlayer = document.getElementById("cardPlayerId");
    const player = document.getElementById("playerId");

    // Verificar si el elemento existe antes de intentar acceder a sus propiedades
    if (playlistContainerShow) {
      playlistContainerShow.style.display = showPlayListContainer
        ? "none"
        : "block";
      trackImage.style.display = showPlayListContainer ? "block" : "none";
      trackImage.style.gridArea = showPlayListContainer
        ? "2 / 2 / 4 / 3"
        : "2 / 2 / 1 / 3";
      cardPlayer.style.gridArea = showPlayListContainer
        ? "2 / 2 / 3 / 3"
        : "2 / 2 / 4 / 3";
      player.style.gridArea = showPlayListContainer
        ? "3 / 2 / 5 / 5"
        : "3 / 2 / 1 / 5";
    }
    setShowPlaylistContainer(!showPlayListContainer);
  }

  return (
    <div className="allTracksButton">
      <button className="buttonReset" onClick={allTracksHandler}>
        {showPlayListContainer ? <CgPushChevronDownO /> : <CgPushChevronUpO />}
      </button>
    </div>
  );
}
