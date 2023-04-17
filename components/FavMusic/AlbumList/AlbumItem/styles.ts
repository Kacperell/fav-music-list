import styled from "styled-components";
import { ListItemText } from "@material-ui/core";
export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
`;

export const Title = styled(ListItemText)`
  flex-grow: 1;
  margin-right: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
