import React from 'react';
import "./UserPlaylist.css";
import Playlist from './Playlist';

export default function UserPlaylist() {
  return (
    <div className='userPlaylist'>
        <div className="userPlaylistTitle"><h5>My Playlist</h5>
        </div>
        <div className="playlist"><Playlist/></div>
    </div>
  )
}
