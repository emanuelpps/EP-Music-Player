import React, { useState } from "react";
import "./AllTracksButton.css";
import { BsArrowBarDown } from "react-icons/bs";
import { BsArrowBarUp } from "react-icons/bs";

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
        cardPlayer.style.height = showPlayListContainer
        ? ""
        : "300px"
      player.style.gridArea = showPlayListContainer
        ? "3 / 2 / 5 / 5"
        : "2 / 2 / 1 / 5";
      player.style.marginTop = showPlayListContainer
      ? "0px"
      : "240px"
      player.style.borderRadius = showPlayListContainer
      ? "12px"
      : "12px"
      /* player.style.transition = showPlayListContainer
      ? "none"
      : "ease-in-out 3s" */
    }
    setShowPlaylistContainer(!showPlayListContainer);
  }

  return (
    <div className="allTracksButton">
      <button className="allTrack-button buttonReset" onClick={allTracksHandler}>
        {showPlayListContainer ? <BsArrowBarDown /> : <BsArrowBarUp />}
      </button>
    </div>
  );
}
