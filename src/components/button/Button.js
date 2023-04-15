import React, { useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth";
import { postLinks } from "../../services/UserServices";
import { ButtonContainer } from "./ButtonStyles";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { CircularProgress } from "@mui/material";
export const Button = () => {
  const [teste, setTeste] = useState(`0%`);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false)
  const { setNewLink, newLink, setShowCard } = React.useContext(AuthContext);
  function handleNextMouseLeave() {
    if (value !== "") {
      return setTeste("0%");
    }
    setTeste("20%");
    if (teste === "20%") setTeste("0%");
  }
  function handlePrevMouseLeave() {}

  useEffect(() => {
    const interval = setInterval(() => {
      setTeste("0%");
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  function handleForm(e) {
    e.preventDefault();
  }

  function createLink() {
    const link = postLinks(value);
    setLoading(true)
    link
      .then((response) => {
        setNewLink([...newLink, response.data]);
        setShowCard(true);
        setValue("");
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.status);
        setLoading(false)
      });
    
  }

  return (
    <ButtonContainer type={teste} onSubmit={handleForm}>
      <input
        required
        type="link"
        placeholder="Cole Aqui Seu Link"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    
      <LoadingButton
        loading={loading}
        loadingPosition="center"
        variant="outlined"
        onMouseEnter={handleNextMouseLeave}
        onMouseLeave={handlePrevMouseLeave}
        onClick={createLink}
        sx={{color:'#000'}}
      >
        {!loading?'Enviar':null}
      
      </LoadingButton>
    </ButtonContainer>
  );
};
