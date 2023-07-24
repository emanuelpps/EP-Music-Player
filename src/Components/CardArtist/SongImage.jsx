import React from "react";
import "./SongImage.css";
import imageExample from "../../Assets/Images/lemonmusicstudio.webp";

export default function SongImage() {
  return (
    <div >
      <img src={imageExample} alt="example"className="songImage"/>
    </div>
  );
}
