import React, { createContext, useContext, useState, useEffect } from 'react';
import { PLAYLIST_API, TRACK_STREAM } from "../Api/MusicApi";
import useSound from "use-sound";

export const MusicContext = createContext("");

const { Provider } = MusicContext;

const useApiContext = () => useContext(MusicContext);

export const MusicContextProvider = ({ children }) => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [streamSong, setStreamSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
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

  console.log(playlistTracks);

  const streamTrack = async (id) => {
    try {
        const audioUrl = await fetch(`${TRACK_STREAM}/${id}/stream?app_name=EXAMPLEAPP`);
        setStreamSong(audioUrl.url); // Establecer la URL como fuente para la reproducción
      } catch (error) {
        console.log(error);
      }
    }

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
    isPlaying
  };

  return <Provider value={context}>{children}</Provider>;
}

export default useApiContext;
