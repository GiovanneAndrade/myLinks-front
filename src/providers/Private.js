import React, { useContext, useEffect } from "react";
import { Home } from "../pages/home/Home";
import { Signin } from "../pages/signin/Signin";
import { AuthContext } from "./auth";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  
  const { user, setUser, categories } = React.useContext(AuthContext) ;
  let listLink = localStorage.getItem("tokenMyLink");
  listLink = JSON.parse(listLink);


 
  
    if (!user && !listLink) {
      navigate("/");
    }
 

  return children;
};
