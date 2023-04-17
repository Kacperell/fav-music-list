import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const StyledHeartIcon = styled(IconButton)<{ active: boolean }>`
  && {
    ${({ active }) => (active ? "color: #f50057" : "")};
  }
`;
type Props = {
  active: boolean;
  onClick: (changeToBest: boolean) => void;
};

export const HeartIcon = ({ active, onClick }: Props) => {
  return (
    <StyledHeartIcon active={active} onClick={() => onClick(!active)}>
      <Favorite />
    </StyledHeartIcon>
  );
};
