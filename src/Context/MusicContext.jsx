import React, { createContext, useContext, useState, useEffect } from "react";
import { PLAYLIST_API, TRACK_STREAM, TRACK_INFO } from "../Api/MusicApi";
//import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const MusicContext = createContext("");

const { Provider } = MusicContext;

const useApiContext = () => useContext(MusicContext);

/////////////////////////// hacer llamado de playlist a la api, esa respuesta enviarla a un array, en caso de que la reporduccion sea del userplaylist modificar ese array y pasar todas las pistas del user playlist a ese array y visceversa

export const MusicContextProvider = ({ children }) => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [streamSong, setStreamSong] = useState("");
  const [songInfo, setSongInfo] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayListContainer, setShowPlaylistContainer] = useState(false);
  const [userPlaylist, setUserPlaylist] = useState([]);
  const [activeLikeButton, setActiveLikeButton] = useState(false);
  const [showUserPlaylist, setShowUserPlaylist] = useState(false);

  //llamada a la api solicitando la playlist
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

  //al cargar selecciona una track random
  useEffect(() => {
    playRandomTrack();
  }, [playlistTracks]);

  // seleccionar una track random de la playlist devuelta de la api
  const playRandomTrack = () => {
    if (playlistTracks.length > 0) {
      const selectRandomTrack =
        playlistTracks[Math.floor(Math.random() * playlistTracks.length)];
      streamTrack(selectRandomTrack.id);
      fetchTrackInfo(selectRandomTrack.id);
    }
  };

  console.log(playlistTracks);

  // Reproducir un track
  const streamTrack = async (id) => {
    const paintTrack = document.getElementsByClassName("trackPlaylistButton");
    try {
      const audioUrl = await fetch(
        `${TRACK_STREAM}/${id}/stream?app_name=EP-MUSIC-PLAYER`
      );
      setStreamSong(audioUrl.url); // Establecer la URL como fuente para la reproducción
      paintTrack.style.backgroundColor = "blue"
    } catch (error) {
      console.log(error);
    }
  };

  const selectedTrack = (id) => {
    //armar una logica que busque el id de la pista que se escucha y pinte en el playlist de otro color
    if (playlistTracks.id === id) {
      const titleSelected = document.getElementById("songTitleId");
      titleSelected.style.backgroundColor = "#4682A9";
    }
  };

  // fetch solicitando la informacion de la track que se esta reproduciendo
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

  // Siguiente cancion de la playlist
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

  //Cancion previa de la playlist
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

  // Agregar canccion a la playlist
  const addSongToPlaylist = (id) => {
    const trackFinder = playlistTracks.find((track) => track.id === id);
    const isInPlaylist = userPlaylist.find((track) => track.id === id)
      ? true
      : false;

    if (isInPlaylist) {
      setActiveLikeButton(false);
      console.log("REMOVED");
      console.log("is in playlist");
      setUserPlaylist(userPlaylist.filter((track) => track.id !== id));
    } else {
      setActiveLikeButton(true);
      /*playlist.push(trackFinder);*/
      console.log("ADDED");
      console.log("trackFinder", trackFinder);
      const newPlaylist = [...userPlaylist, trackFinder];
      setUserPlaylist(newPlaylist);
    }
    console.log("playlust", userPlaylist);
  };

  /* const removeSongofPlaylist = (id) => {
    console.log('removed');

    const trackFinder = playlistTracks.find((track) => track.id === id);
    const isInPlaylist = userPlaylist.find((track) => track.id === id)
    ? true
    : false;

    if(!isInPlaylist){

    }
  } */

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
    setShowPlaylistContainer,
    addSongToPlaylist,
    userPlaylist,
    activeLikeButton,
    showUserPlaylist,
    setShowUserPlaylist
  };

  return <Provider value={context}>{children}</Provider>;
};

export default useApiContext;
