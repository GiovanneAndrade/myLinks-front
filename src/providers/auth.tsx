import React, { useEffect, useState } from "react";
import { getCategories, getLinks } from "../services/UserServices";

export const AuthContext = React.createContext({});

export const AuthProvider = (props: any) => {
  const [link, setLink] = useState();
  const [categories, setCategories] = useState();
  const [newLink, setNewLink] = useState() as any;
  const [showCard, setShowCard] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  console.log(categories)
  useEffect(() => {
    const links = getLinks();
    links
      .then((response) => {
        setLink(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    const categories = getCategories();
    categories
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        link,
        newLink,
        setNewLink,
        showCard,
        setShowCard,
        showAddButton,
        setShowAddButton,
        categories
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
