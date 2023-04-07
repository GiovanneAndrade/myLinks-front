import React, { useContext, useEffect } from "react";
import { Home } from "../pages/home/Home";
import { Signin } from "../pages/signin/Signin";
import { AuthContext } from "./auth";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  
  const { user, setUser, categories } = React.useContext(AuthContext) as any;
  let listLink = localStorage.getItem("tokenMyLink") as any;
  listLink = JSON.parse(listLink);


  useEffect(() => {
    let listLink = localStorage.getItem("tokenMyLink") as any;
    listLink = JSON.parse(listLink);
    setUser(listLink);
    if (!user && !listLink) {
      navigate("/");
    }
  }, [listLink]);

  return children;
};
