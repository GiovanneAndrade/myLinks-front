import React from "react";
import { NavContainer, NavRight, P } from "./NavStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../../providers/auth";
import { IconButton } from "@mui/material";
export const Nav = () => {
  const { open, setOpen, selectCategory } = React.useContext(AuthContext);
 
  const navigate = useNavigate();
  let name = localStorage.getItem("tokenMyLink");
  name = name ? JSON.parse(name) : [];
  function logout() {
    localStorage.removeItem("tokenMyLink");
    navigate("/");
    window.location.reload();
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <NavContainer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>

      <p>{!selectCategory?'All Links':selectCategory?.name}</p>
      <NavRight>
        <Tooltip title="edit" disableInteractive>
          <Button style={{ color: "#fff", margin: "-30px" }}>
            <AccountCircleIcon />
          </Button>
        </Tooltip>

        <Tooltip title="Logout" disableInteractive>
          <Button onClick={logout}>
            <P>{name.name}</P>
          </Button>
        </Tooltip>
      </NavRight>
    </NavContainer>
  );
};
