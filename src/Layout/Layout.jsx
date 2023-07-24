import React from 'react';
import "./Layout.css";
import CardPlayer from '../Components/CardPlayer/CardPlayer';
import UserPlaylist from "../Components/UserPlaylist/UserPlaylist";

export default function Layout() {
  return (
    <div className='layout'>
      <CardPlayer/>
      {/*<UserPlaylist/>*/}
    </div>
  );
}
