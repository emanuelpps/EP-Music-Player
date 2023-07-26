import React, { useContext } from "react";
import "./MusicPlayer.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MusicContext } from "../../Context/MusicContext";
import { CgPlayButtonR } from "react-icons/cg";
import { CgPlayPauseR } from "react-icons/cg";
import { CgPlayTrackNextR } from "react-icons/cg";
import { CgPlayTrackPrevR } from "react-icons/cg";
import { CgRepeat } from "react-icons/cg";


export default function MusicPlayer() {
  const { streamSong, nextSongStream, songInfo, previousSongStream } = useContext(MusicContext);

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
        onPlay={(e) => console.log("onPlay")}
        onClickPrevious={(e) => previousSongStream(songInfo.id)}
        onClickNext={(e) =>nextSongStream(songInfo.id)}
        customIcons={{
          play: <CgPlayButtonR className="buttonReset" />,
          pause: <CgPlayPauseR className="buttonReset" />,
          next: <CgPlayTrackNextR className="buttonReset" />,
          previous: <CgPlayTrackPrevR className="buttonReset" />,
          loop: <CgRepeat className="buttonReset" />
        }}
        className="playerAudio"
      />
    </div>
  );
}
