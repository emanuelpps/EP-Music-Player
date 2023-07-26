import React, { useContext } from 'react';
import "./PlayListContainer..css";
import { MusicContext } from "../../Context/MusicContext";
import Playlist from './Playlist';

export default function PlayListContainer() {

  const {playlistTracks} = useContext(MusicContext);
  return (
    <div id='playlistContainerId' className='playListContainer'>
      {playlistTracks?.map((item, index) => (
      <Playlist key={index} id={item.id} musicPlaylistTracks={item}/>
      ))}
    </div>
  )
}
