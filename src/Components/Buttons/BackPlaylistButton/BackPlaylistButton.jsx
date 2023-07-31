import React, { useContext } from 'react';
import { BiArrowFromRight } from "react-icons/bi";
import "./BackPlaylistButton.css";
import { MusicContext } from '../../../Context/MusicContext';

export default function BackPlaylistButton() {
  const { showUserPlaylist, setShowUserPlaylist } = useContext(MusicContext);

  const showMyPlaylist = () => {
    setShowUserPlaylist(!showUserPlaylist);
  };
  return (
    <div>
    <button className="buttonReset buttonBackPlaylist" onClick={() => showMyPlaylist()}>
      <BiArrowFromRight />
    </button></div>
  )
}
