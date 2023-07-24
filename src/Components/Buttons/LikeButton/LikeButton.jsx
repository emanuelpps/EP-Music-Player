import React from "react";
import "./LikeButton.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function LikeButton() {
  return (
    <div>
      <button className="buttonReset likeButton">
        <AiOutlineHeart />
      </button>
    </div>
  );
}
