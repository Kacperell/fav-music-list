import { useState } from "react";
import AlbumItem from "./AlbumItem";
import type { Album } from "@/types";
import { SortAlbumsSelect } from "./SortAlbumsSelect";
import { ListGridSwitch } from "./ListGridSwitch";
import { ListHeader, AlbumListWrapper } from "./styles";

type Props = {
  albums: Album[];
  onDelete: (id: string) => void;
  onSetBest: (id: string, changeToBest: boolean) => void;
};

export type ListView = "list" | "grid";
export type SortMethod = "id" | "addedDate" | "name";
const AlbumList = ({ albums, onDelete, onSetBest }: Props) => {
  const [view, setView] = useState<ListView>("list");
  const [sort, setSort] = useState<SortMethod>("addedDate");

  const sortedAlbums = [...albums].sort((a, b) => {
    if (sort === "id") return a.id.localeCompare(b.id);
    if (sort === "name") return a.name.localeCompare(b.name);
    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
  });

  return (
    <>
      <ListHeader>
        <SortAlbumsSelect sort={sort} onChange={setSort} />
        <ListGridSwitch
          listStyle={view === "list" ? "list" : "grid"}
          onChange={(view) => {
            setView(view);
          }}
        />
      </ListHeader>
      <AlbumListWrapper type={view}>
        {sortedAlbums.map((album) => (
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
