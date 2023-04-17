import type { SortMethod } from "./index";
import { SortAlbumsSelectWrapper } from "./styles";
import { MenuItem } from "@material-ui/core";
import { useTranslations } from "next-intl";

interface Props {
  onChange: (sort: SortMethod) => void;
  sort: SortMethod;
}

export const SortAlbumsSelect = ({ onChange, sort }: Props) => {
  const t = useTranslations("AlbumList");
  return (
    <SortAlbumsSelectWrapper
      color="secondary"
      value={sort}
      onChange={(e) => {
        onChange(e.target.value as SortMethod);
      }}
    >
      <MenuItem value="addedDate"> {t("sortDate")}</MenuItem>
      <MenuItem value="id">ID</MenuItem>
      <MenuItem value="name"> {t("sortName")}</MenuItem>
    </SortAlbumsSelectWrapper>
  );
};
