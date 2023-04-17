import React, { useState, useCallback, useMemo, useEffect } from "react";
import AddAlbumForm from "./AddAlbumForm";
import AlbumList from "./AlbumList";
import type { Album } from "@/types";
import { Container } from "./styles";
import AlbumStorage from "@/utils/localstorage/AlbumsStorage";

const HomePage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const refeatchAlbumsFromStorage = () => {
    setAlbums(AlbumStorage.getAlbums());
  };
  useEffect(() => {
    refeatchAlbumsFromStorage();
  }, []);

  const handleAddAlbum = useCallback((newAlbum: Pick<Album, "name">) => {
    AlbumStorage.addAlbum(newAlbum);
    refeatchAlbumsFromStorage();
  }, []);

  const handleRemoveAlbum = useCallback((albumId: string) => {
    AlbumStorage.removeAlbum(albumId);
    refeatchAlbumsFromStorage();
  }, []);

  const handleSetAsBestOfTheBest = useCallback(
    (albumId: string, changeToBest: boolean) => {
      console.log("handleSetAsBestOfTheBest", albumId, changeToBest);
      AlbumStorage.updateAlbum(albumId, {
        isBest: changeToBest,
      });
      refeatchAlbumsFromStorage();
    },
    []
  );

  return (
    <Container>
      <AddAlbumForm addAlbum={handleAddAlbum} />
      <AlbumList
        albums={albums}
        onDelete={handleRemoveAlbum}
        onSetBest={handleSetAsBestOfTheBest}
      />
    </Container>
  );
};

export default HomePage;
