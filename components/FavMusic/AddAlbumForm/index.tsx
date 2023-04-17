import { useState } from "react";
import { Form } from "./styles";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import type { Album } from "@/types";

interface Props {
  addAlbum: (album: Pick<Album, "name">) => void;
}

const AddAlbumForm = ({ addAlbum }: Props) => {
  const [name, setName] = useState("");

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
            Album name
          </InputLabel>
          <Input
            color="secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
      </FormControl>
      <Button variant="contained" color="secondary" type="submit">
        Add to list
      </Button>
    </Form>
  );
};

export default AddAlbumForm;
