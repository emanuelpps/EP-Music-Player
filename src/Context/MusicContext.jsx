import React, { createContext, useContext, useState, useEffect } from "react";
import { PLAYLIST_API, TRACK_STREAM, TRACK_INFO } from "../Api/MusicApi";

export const MusicContext = createContext("");

const { Provider } = MusicContext;

const useApiContext = () => useContext(MusicContext);

export const MusicContextProvider = ({ children }) => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [streamSong, setStreamSong] = useState("");
  const [songInfo, setSongInfo] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayListContainer, setShowPlaylistContainer] = useState(false);

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      try {
        const response = await fetch(PLAYLIST_API);
        const data = await response.json();
        setPlaylistTracks(data.data); // Guardar los datos en el estado
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaylistTracks(); // Llamar a la función para obtener los datos
  }, []);

  useEffect(() => {
    playRandomTrack();
  }, [playlistTracks]);

  const playRandomTrack = () => {
    if (playlistTracks.length > 0) {
      const selectRandomTrack =
        playlistTracks[Math.floor(Math.random() * playlistTracks.length)];
      streamTrack(selectRandomTrack.id);
      fetchTrackInfo(selectRandomTrack.id);
    }
  };

  console.log(playlistTracks);

  const streamTrack = async (id) => {
    try {
      const audioUrl = await fetch(
        `${TRACK_STREAM}/${id}/stream?app_name=EP-MUSIC-PLAYER`
      );
      setStreamSong(audioUrl.url); // Establecer la URL como fuente para la reproducción
    } catch (error) {
      console.log(error);
    }
  };

  const selectedTrack = (id) => {
    //armar una logica que busque el id de la pista que se escucha y pinte en el playlist de otro color
    if(playlistTracks.id === id){
    const titleSelected = document.getElementById("songTitleId");
    titleSelected.style.backgroundColor = "#4682A9";
  }};

  const fetchTrackInfo = async (id) => {
    try {
      const response = await fetch(
        `${TRACK_INFO}/${id}?app_name=EP-MUSIC-PLAYER`
      );
      const data = await response.json();
      setSongInfo(data.data); // Guardar los datos en el estado
    } catch (error) {
      console.log(error);
    }
  };

  const nextSongStream = (id) => {
    if (playlistTracks.length === 0) {
      console.log("La lista de reproducción está vacía.");
      return;
    }

    const songIndex = playlistTracks.findIndex((track) => track.id === id);

    if (songIndex === -1) {
      console.log("Canción no encontrada en la lista de reproducción.");
      return;
    }

    const nextSongIndex = (songIndex + 1) % playlistTracks.length;
    const nextSongId = playlistTracks[nextSongIndex].id;

    fetchTrackInfo(nextSongId);
    streamTrack(nextSongId);
  };

  const previousSongStream = (id) => {
    if (playlistTracks.length === 0) {
      console.log("La lista de reproducción está vacía.");
      return;
    }

    const songIndex = playlistTracks.findIndex((track) => track.id === id);

    if (songIndex === -1) {
      console.log("Canción no encontrada en la lista de reproducción.");
      return;
    }

    const previousSongIndex =
      (songIndex - 1 + playlistTracks.length) % playlistTracks.length;
    const previousSongId = playlistTracks[previousSongIndex].id;

    fetchTrackInfo(previousSongId);
    streamTrack(previousSongId);
  };



  console.log(streamSong);
  const context = {
    playlistTracks,
    streamTrack,
    streamSong,
    setIsPlaying,
    isPlaying,
    fetchTrackInfo,
    songInfo,
    nextSongStream,
    previousSongStream,
    showPlayListContainer,
    setShowPlaylistContainer
  };

  return <Provider value={context}>{children}</Provider>;
};

export default useApiContext;
