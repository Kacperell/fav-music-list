import type { SortMethod } from "./index";
import { SortAlbumsSelectWrapper } from "./styles";
import { MenuItem } from "@material-ui/core";

interface Props {
  onChange: (sort: SortMethod) => void;
  sort: SortMethod;
}

export const SortAlbumsSelect = ({ onChange, sort }: Props) => {
  return (
    <SortAlbumsSelectWrapper
      color="secondary"
      value={sort}
      onChange={(e) => {
        onChange(e.target.value as SortMethod);
      }}
    >
      <MenuItem value="addedDate">Added Date</MenuItem>
      <MenuItem value="id">ID</MenuItem>
      <MenuItem value="name">Name</MenuItem>
    </SortAlbumsSelectWrapper>
  );
};
