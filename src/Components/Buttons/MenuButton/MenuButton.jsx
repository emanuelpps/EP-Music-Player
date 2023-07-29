import React from "react";
import "./MenuButton.css";
import { FaAlignJustify } from "react-icons/fa";

export default function MenuButton() {
  return (
    <div className="dorpdown m-2">
      <button
        className="buttonReset menuButton"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaAlignJustify />
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            My Playlist
          </a>
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
