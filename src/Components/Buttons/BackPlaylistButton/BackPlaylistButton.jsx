import React from 'react';
import { BiArrowFromRight } from "react-icons/bi";
import "./BackPlaylistButton.css";

export default function BackPlaylistButton() {
  return (
    <div>
    <button className="buttonReset buttonBackPlaylist">
      <BiArrowFromRight />
    </button></div>
  )
}
