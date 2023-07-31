import "./MyPlaylist.css";
import React, { useContext } from "react";
import "./MyPlaylist.css";
import { MusicContext } from "../../Context/MusicContext";

export default function MyPlaylist({id, myPlaylistTracks}) {
    const { streamTrack,fetchTrackInfo } = useContext(MusicContext);

    console.log("myplaylist", id, myPlaylistTracks);
  
    const myPlaylistTime = () => {
      let hour = Math.floor(myPlaylistTracks.duration / 3600);
      hour = hour < 10 ? "0" + hour : hour;
      let minute = Math.floor((myPlaylistTracks.duration / 60) % 60);
      minute = minute < 10 ? "0" + minute : minute;
      let second = myPlaylistTracks.duration % 60;
      second = second < 10 ? "0" + second : second;
  
      return hour === "00" ? minute + ":" + second : hour + ":" + minute + ":" + second;
    };
  
  
  
  return (
      <button  className="buttonReset trackPlaylistButton" onClick={() => {
        streamTrack(id);
        fetchTrackInfo(id); // Reemplaza "otraFuncion()" con el nombre de la segunda función que deseas llamar
      }}>
        <h5 className="text-start track-Title">{myPlaylistTracks.title}</h5>
        <h7 className="trackTime">{myPlaylistTime()}</h7>
      </button>
  );
  }