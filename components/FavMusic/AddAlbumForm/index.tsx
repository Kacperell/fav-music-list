import { useState } from "react";
import { Form } from "./styles";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import type { Album } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  addAlbum: (album: Pick<Album, "name">) => void;
}

const AddAlbumForm = ({ addAlbum }: Props) => {
  const [name, setName] = useState("");
  const t = useTranslations("AddAlbumForm");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;
    addAlbum({ name });
    setName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <FormControl>
          <InputLabel
            variant="standard"
            color="secondary"
            htmlFor="album-name-input"
          >
            {t("newOfNewAlbum")}
          </InputLabel>
          <Input
            color="secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
      </FormControl>
      <Button variant="contained" color="secondary" type="submit">
        {t("button")}
      </Button>
    </Form>
  );
};

export default AddAlbumForm;
