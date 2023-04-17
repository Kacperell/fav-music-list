import styled from "styled-components";
import { ListView } from "./index";
import { FormGroup, Select } from "@material-ui/core";
interface ListProps {
  type: ListView;
}
const switchBreakpoint = "768px";

export const AlbumListWrapper = styled.div<ListProps>`
  display: ${({ type }) => (type === "grid" ? "grid" : "block")};
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;

  @media (max-width: ${switchBreakpoint}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ListGridSwitchWrapper = styled(FormGroup)`
  @media (max-width: ${switchBreakpoint}) {
    display: none !important;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SortAlbumsSelectWrapper = styled(Select)`
  min-width: 150px;
`;
