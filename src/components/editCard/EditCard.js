import React, { useState } from "react";
import { EditCardContainer } from "./EditCardStyles";
import { LoadingButton } from "@mui/lab";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AuthContext } from "../../providers/auth";
import { editLink } from "../../services/UserServices";
export const EditCard = () => {
  const [loading, setLoading] = useState(false);
  const { categories,linkId, setClickedLinkId } = React.useContext(AuthContext);
  const [age, setAge] = React.useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const data = {
    linkId: linkId,
    title,
    description,
    photo,
    list: [{ id: age }],
  };

 
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function pushEditLink() {
    const link = editLink(data);
    link
      .then((response) => {
        console.log(response.data);
        setAge("");
        setTitle("");
        setDescription("");
        setPhoto("");
        setClickedLinkId(false)
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setAge("");
        setTitle("");
        setDescription("");
        setPhoto("");
        setClickedLinkId(false)
        alert(error.response.status);
      });
  }
  return (
    <EditCardContainer >
      <input
        type="text"
        placeholder="titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/*   <input type="text" placeholder="foto" value={photo} onChange={(e) => setPhoto(e.target.value)} /> */}
      <FormControl style={{ width: "80%" }} className="custom-form-control">
        <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Categorias"
          onChange={handleChange}
          style={{ fontSize: "16px", color: "white" }}
          className="custom-select"
        >
          {categories?.map((c) => (
            <MenuItem value={c.id}>{c.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <span>
        <LoadingButton
          onClick={pushEditLink}
          loading={loading}
          loadingPosition="center"
          variant="outlined"
          sx={{ color: "#fff", backgroundColor: "#000", borderRadius: "10px" }}
        >
          {!loading ? "Editar" : null}
        </LoadingButton>
        <LoadingButton
          onClick={()=>setClickedLinkId(false)}
          loading={loading}
          loadingPosition="center"
          variant="outlined"
          sx={{ color: "#fff", backgroundColor: "#000", borderRadius: "10px" }}
        >
          {!loading ? "cancelar" : null}
        </LoadingButton>
      </span>
    </EditCardContainer>
  );
};
