import React from "react";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

type Props = {
  onClick: () => void;
};

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <IconButton onClick={onClick}>
      <Delete />
    </IconButton>
  );
};
