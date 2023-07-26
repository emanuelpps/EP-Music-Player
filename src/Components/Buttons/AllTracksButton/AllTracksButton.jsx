import React, { useState } from "react";
import "./AllTracksButton.css";
import { CgChevronDownR } from "react-icons/cg";
import { CgChevronUpR } from "react-icons/cg";

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
        : "2 / 2 / 1 / 5";
      player.style.marginTop = showPlayListContainer
      ? "0px"
      : "170px"
      player.style.borderRadius = showPlayListContainer
      ? "12px"
      : "12px 12px 2px 2px"
    }
    setShowPlaylistContainer(!showPlayListContainer);
  }

  return (
    <div className="allTracksButton">
      <button className="buttonReset" onClick={allTracksHandler}>
        {showPlayListContainer ? <CgChevronDownR /> : <CgChevronUpR />}
      </button>
    </div>
  );
}
