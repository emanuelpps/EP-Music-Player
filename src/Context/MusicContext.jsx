import React, { createContext, useContext, useState, useEffect } from 'react';
import { PLAYLIST_API, TRACK_STREAM, TRACK_INFO } from "../Api/MusicApi";
import useSound from "use-sound";


export const MusicContext = createContext("");

const { Provider } = MusicContext;

const useApiContext = () => useContext(MusicContext);

export const MusicContextProvider = ({ children }) => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [streamSong, setStreamSong] = useState("");
  const [songInfo, setSongInfo] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [play, { pause}] = useSound(streamSong);


  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      try {
        const response = await fetch(PLAYLIST_API);
        const data = await response.json();
        setPlaylistTracks(data.data); // Guardar los datos en el estado
      } catch (error) {
        console.log(error);
      }
    }
    fetchPlaylistTracks(); // Llamar a la función para obtener los datos
  }, []);

  useEffect(() => {
    playRandomTrack();
  }, [playlistTracks]);

  const playRandomTrack = () => {
    if (playlistTracks.length > 0) {
      const selectRandomTrack = playlistTracks[Math.floor(Math.random() * playlistTracks.length)];
      streamTrack(selectRandomTrack?.id);
      fetchTrackInfo(selectRandomTrack?.id);
    }
  };

  console.log(playlistTracks);

  const streamTrack = async (id) => {
    try {
        const audioUrl = await fetch(`${TRACK_STREAM}/${id}/stream?app_name=EP-MUSIC-PLAYER`);
        setStreamSong(audioUrl.url); // Establecer la URL como fuente para la reproducción
      } catch (error) {
        console.log(error);
      }
    }

    const fetchTrackInfo = async (id) => {
      try {
        const response = await fetch(`${TRACK_INFO}/${id}?app_name=EP-MUSIC-PLAYER`);
        const data = await response.json();
        setSongInfo(data.data); // Guardar los datos en el estado
      } catch (error) {
        console.log(error);
      }
    }

    const nextSongStream = (id) => {
      const songIndex = playlistTracks.findIndex((track) => track.id === id) + 1;
      console.log("index", songIndex);
      //const nextSong = playlistTracks.fromIndex({songIndex});
      if (songIndex !== -1) {
        fetchTrackInfo(playlistTracks[songIndex].id);
        streamTrack(playlistTracks[songIndex].id);
      } else if(playlistTracks.length + 1){
        fetchTrackInfo(playlistTracks[1].id);
        streamTrack(playlistTracks[1].id);
      }else {
        console.log("Canción no encontrada en la lista de reproducción.");
      }
    };

    const previousSongStream = (id) => {
      const songIndex = playlistTracks.findIndex((track) => track.id === id) - 1;
      console.log("index", songIndex);
      //const nextSong = playlistTracks.fromIndex({songIndex});
      if (songIndex !== -1) {
        fetchTrackInfo(playlistTracks[songIndex].id);
        streamTrack(playlistTracks[songIndex].id);
      }else {
        console.log("Canción no encontrada en la lista de reproducción.");
      }
    };


    const playingButton = () => {
        if (isPlaying) {
          pause(); // this will pause the audio
          setIsPlaying(false);
        } else {
          play(); // this will play the audio
          setIsPlaying(true);
        }
      };
    

console.log(streamSong);
  const context = {
    playlistTracks,
    streamTrack,
    streamSong,
    playingButton,
    isPlaying,
    fetchTrackInfo,
    songInfo,
    nextSongStream,
    previousSongStream
  };

  return <Provider value={context}>{children}</Provider>;
}

export default useApiContext;
