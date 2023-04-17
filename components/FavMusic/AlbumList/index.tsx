import { useState } from "react";

import AlbumItem from "./AlbumItem";
import type { Album } from "@/types";
import { ListGridSwitch } from "./ListGridSwitch";
import { AlbumListWrapper } from "./styles";

type Props = {
  albums: Album[];
  onDelete: (id: string) => void;
  onSetBest: (id: string, changeToBest: boolean) => void;
};

export type ListView = "list" | "grid";
const AlbumList = ({ albums, onDelete, onSetBest }: Props) => {
  const [view, setView] = useState<ListView>("list");

  return (
    <>
      <ListGridSwitch
        listStyle={view === "list" ? "list" : "grid"}
        onChange={(view) => {
          setView(view);
        }}
      />
      <AlbumListWrapper type={view}>
        {albums.map((album) => (
          <AlbumItem
            key={album.id}
            album={album}
            onDelete={onDelete}
            onSetBest={onSetBest}
          />
        ))}
      </AlbumListWrapper>
    </>
  );
};

export default AlbumList;
