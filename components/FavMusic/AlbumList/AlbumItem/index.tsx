import React from "react";
import { HeartIcon } from "./HeartIcon";
import { DeleteButton } from "./DeleteButton";
import type { Album } from "@/types";
import { Container, Title, ButtonsContainer } from "./styles";

type Props = {
  album: Album;
  onDelete: (id: string) => void;
  onSetBest: (id: string, changeToBest: boolean) => void;
};

const AlbumItem: React.FC<Props> = ({ album, onDelete, onSetBest }) => {
  const handleRemoveClick = () => {
    onDelete(album.id);
  };

  const handleBestClick = (changeToBest: boolean) => {
    onSetBest(album.id, changeToBest);
  };

  return (
    <Container>
      <Title>{album.name}</Title>
      <ButtonsContainer>
        <HeartIcon active={album.isBest} onClick={handleBestClick} />
        <DeleteButton onClick={handleRemoveClick} />
      </ButtonsContainer>
    </Container>
  );
};

export default AlbumItem;
