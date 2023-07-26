import React from "react";
import "./SongImage.css";
import imageExample from "../../Assets/Images/lemonmusicstudio.webp";

export default function SongImage() {
  return (
      <img src={imageExample} alt="example"className="songImage"/>
  );
}
