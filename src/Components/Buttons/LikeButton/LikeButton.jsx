import React from "react";
import "./LikeButton.css";
import { FaRegHeart } from "react-icons/fa";

export default function LikeButton() {
  return (
    <div>
      <button className="buttonReset likeButton">
        <FaRegHeart />
      </button>
    </div>
  );
}
