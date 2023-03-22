import React, { useState } from "react";
import { CategoriesConteiner, H2 } from "./CategoriesStyles";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { CategoriesContainer } from "./CategoriesContainer";
export const Categories = () => {
  const [handlePrev, setHandlePrev] = useState(true);
  const [selectCategory, setSelectCategory] = useState("#b1c586");
  const [selectedCategory, setSelectedCategory] = useState();
  const listCategories = [
    { id: 1, title: "Links de Noticias" },
      { id: 2, title: "Links de Favoritos" },
    { id: 3, title: "Links Mais Acessados" },
    { id: 4, title: "Ultimos Adicionados" },
    { id: 5, title: "Blogs" },
    { id: 6, title: "Todos os Links" }, 
  ];
  const [show, setShow] = useState({
    width: "70px",
    color: "transparent",
    content: "center",
    font: "9px",
    display: "none",
    top:"140px",
    right:'0',
    position:'absolute',
  });

  function handleNextMouseLeave() {
    setShow({
      width: "250px",
      color: "null",
      content: "space-between",
      font: "15px",
      display: "block",
      top:"140px",
      right:'0',
      position:'absolute',
    });
    setHandlePrev(false);
  }

  function handlePrevMouseLeave() {
    setShow({
      width: "70px",
      color: "transparent",
      content: "center",
      font: "9px",
      display: "none",
      top:"140px",
      right:'0',
      position:'absolute',
    });
    setHandlePrev(true);
  }

  return (
    <>
      <CategoriesConteiner type={show} onMouseEnter={handleNextMouseLeave}>
        <div>
          <DoubleArrowIcon
            onClick={handlePrevMouseLeave}
            className="arrowIcon"
          />
          Categories
        </div>
        {listCategories.map((category) => (
          <CategoriesContainer
            category={category.title}
            categoryId={category.id}
          />
        ))}
      </CategoriesConteiner>
      {/*  <CategoriesContainers />  */}
    </>
  );
};
