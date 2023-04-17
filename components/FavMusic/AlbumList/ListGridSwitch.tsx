import { FormControlLabel, Switch } from "@material-ui/core";
import type { ListView } from "./index";
import { ListGridSwitchWrapper } from "./styles";
import { useTranslations } from "next-intl";

interface Props {
  onChange: (listStyle: "list" | "grid") => void;
  listStyle: ListView;
}

export const ListGridSwitch = ({ onChange, listStyle }: Props) => {
  const t = useTranslations("AlbumList");

  return (
    <ListGridSwitchWrapper>
      <FormControlLabel
        control={
          <Switch
            checked={listStyle === "grid"}
            onChange={(e) => {
              onChange(e.target.checked ? "grid" : "list");
            }}
          />
        }
        label={t("grid")}
      />
    </ListGridSwitchWrapper>
  );
};
