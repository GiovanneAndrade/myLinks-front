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
  const [linkId, setLinkId] = React.useState();
  const [newCardEdit, setNewCardEdit] = React.useState();
  const [clickedLinkId, setClickedLinkId] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [newCategory, setNewCategory] = React.useState();
  const [selectCategory, setSelectCategory] = React.useState();
  const [newHome, setNewHome] = React.useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const categories = getCategories();
    categories
      .then((response) => {
        setCategories(response.data);
        setNewLink(categories?.filter((c) => c.id === 0)[0]?.links);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newCategory, newHome]);
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
        clickedLinkId,
        setClickedLinkId,
        open,
        setOpen,
        linkId,
        setLinkId,
        newCardEdit,
        setNewCardEdit,
        newCategory,
        setNewCategory,
        selectCategory,
        setSelectCategory,
        newHome,
        setNewHome,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
