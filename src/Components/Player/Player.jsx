import React, { useContext, useState, useEffect } from "react";
import "./Player.css";
import PlayerButtons from "../Buttons/PlayerButtons/PlayerButtons";
import AllTracksButton from "../Buttons/AllTracksButton/AllTracksButton";
import useSound from "use-sound"; // for handling the sound
import { MusicContext } from "../../Context/MusicContext";
//import qala from "../assets/qala.mp3";

export default function Player() {
  const { streamSong, isPlaying } = useContext(MusicContext);
  const [{ duration, sound }] = useSound(streamSong);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <div id="playerId" className="player">
      <div className="timeProgress">
        <h7 className="time">
          {currTime.min}:{currTime.sec}
        </h7>
      </div>
      <div class="progressBar">
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound?.seek([e.target.value]);
          }}
        />
      </div>
      <div className="totalTime">
        <h7 className="time">
          {currTime.min}:{currTime.sec}
        </h7>
      </div>
      <PlayerButtons />
      <AllTracksButton />
    </div>
  );
}
