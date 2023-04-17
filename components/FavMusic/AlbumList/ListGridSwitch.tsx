import { FormControlLabel, Switch } from "@material-ui/core";
import type { ListView } from "./index";
import { ListGridSwitchWrapper } from "./styles";
interface Props {
  onChange: (listStyle: "list" | "grid") => void;
  listStyle: ListView;
}

export const ListGridSwitch = ({ onChange, listStyle }: Props) => {
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
        label="Grid"
      />
    </ListGridSwitchWrapper>
  );
};
