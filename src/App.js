import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";

const App = () => {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums();
      setTopAlbumSongs(topAlbumSongs);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const generateNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await fetchNewAlbums();
      setNewAlbumSongs(newAlbumSongs);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "0px 30px 60px",
        }}
      >
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
        <Section type="album" title="New Albums" data={newAlbumSongs} />
      </div>
    </>
  );
};

export default App;
