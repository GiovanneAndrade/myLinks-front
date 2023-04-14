import React, { useEffect, useState } from "react";
import { getCategories, getLinks } from "../services/UserServices";


export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [link, setLink] = useState();
  const [user, setUser] = useState();
  const [categories, setCategories] = useState();
  const [newLink, setNewLink] = useState();
  const [showCard, setShowCard] = useState(false);
  const [showAddButton, setShowAddButton] = useState(false);
  const [categoriesId, setCategoriesId] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [page, setPage] = React.useState(1);
  const [per_page, setPerPage] = React.useState(10);

  
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
        categories,
        categoriesId,
        setCategoriesId,
        setCategoryName,
        categoryName,
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
