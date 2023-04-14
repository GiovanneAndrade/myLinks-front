import React from "react";
import { NavContainer, NavRight, P } from "./NavStyles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = useNavigate();
  let name = localStorage.getItem("tokenMyLink");
  name = name ? JSON.parse(name) : [];
  function logout(){
    localStorage.removeItem("tokenMyLink");
    navigate("/");
    window.location.reload();
  }
  return (
    <NavContainer>
      <p>myLinks</p>
      <p>home</p>
      <NavRight>
      <Tooltip title="edit" disableInteractive>
          <Button style={{color:'#fff',margin:'-30px'}}>
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
