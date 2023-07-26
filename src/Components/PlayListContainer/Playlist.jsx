import React, { useContext } from "react";
import "./Playlist.css";
import { MusicContext } from "../../Context/MusicContext";

export default function Playlist({ musicPlaylistTracks, id}) {

    
      const { streamTrack } = useContext(MusicContext);

    const trackTime = () => {
      let hour = Math.floor(musicPlaylistTracks.duration / 3600);
      hour = hour < 10 ? "0" + hour : hour;
      let minute = Math.floor((musicPlaylistTracks.duration / 60) % 60);
      minute = minute < 10 ? "0" + minute : minute;
      let second = musicPlaylistTracks.duration % 60;
      second = second < 10 ? "0" + second : second;
  
      return hour === "00" ? minute + ":" + second : hour + ":" + minute + ":" + second;
    };

  return (
      <button className="buttonReset trackPlaylistButton" onClick={() => streamTrack(id)}>
        <h5 className="text-start trackTitle">{musicPlaylistTracks.title}</h5>
        <h7 className="trackTime">{trackTime()}</h7>
      </button>
  );
}
