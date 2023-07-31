import React, { useContext } from "react";
import "./MusicPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MusicContext } from "../../Context/MusicContext";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import useSound from "use-sound";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const {
    streamSong,
    nextSongStream,
    songInfo,
    previousSongStream,
    setIsPlaying,
  } = useContext(MusicContext);

  const [play, { pause }] = useSound(streamSong);

  const playingButton = () => {
    play(); // this will play the audio
    setIsPlaying(true);
  };

  const pauseButton = () => {
    pause(); // this will pause the audio
    setIsPlaying(false);
  };

  return (
    <div className="audioPlayer">
      <AudioPlayer
        autoPlay
        defaultCurrentTime="Loading"
        defaultDuration="Loading"
        showSkipControls={true}
        showJumpControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        src={streamSong}
        onPlay={(e) => playingButton()}
        onPause={(e) => pauseButton()}
        onEnded={() => nextSongStream(songInfo.id)}
        onClickPrevious={(e) => previousSongStream(songInfo.id)}
        onClickNext={(e) => nextSongStream(songInfo.id)}
        customIcons={{
          play: <BsFillPlayFill className="button-player buttonReset mx-1" />,
          pause: <BsFillPauseFill className="button-player buttonReset mx-1" />,
          next: <BsFillSkipEndFill className="button-player buttonReset" />,
          previous: (
            <BsFillSkipStartFill className="button-player buttonReset" />
          ),
        }}
        className="playerAudio"
      />
    </div>
  );
}
