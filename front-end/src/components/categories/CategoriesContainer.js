import React, { useEffect, useState } from "react";
import { H2 } from "./CategoriesStyles";
import { AuthContext } from "../../providers/auth";
export const CategoriesContainer = ({
  category,
  categoryId,
  categoryLinks,
}) => {
  const [selectCategory, setSelectCategory] = useState("#424e29");
  const { categoriesId, setCategoriesId, setCategoryName } = React.useContext(
    AuthContext
  );
 

  useEffect(() => {
    const storedArray = localStorage.getItem("categoryId");
    const myArray = storedArray ? JSON.parse(storedArray) : [];
    setCategoriesId(myArray);
  }, []);

  function handleCategory(category, name) {
    if (selectCategory === "#424e29") {
      const storedArray = localStorage.getItem("categoryId");
      const myArray = storedArray ? JSON.parse(storedArray) : [];
      const newArray = [...myArray, category];
      localStorage.setItem("categoryId", JSON.stringify(newArray)) ;
      setCategoriesId(newArray);
      setCategoryName(name)
      return setSelectCategory("rgba(0, 0, 0, 0.782)");
    }
    if (selectCategory === "rgba(0, 0, 0, 0.782)") {
      const storedArray = localStorage.getItem("categoryId");
      const myArray = storedArray ? JSON.parse(storedArray) : [];
      const newArray = myArray.filter((item) => item !== category);
      localStorage.setItem("categoryId", JSON.stringify(newArray));
      setCategoriesId(newArray);
      return setSelectCategory("#424e29");
    }
  }
  
  useEffect(() => {
    localStorage.removeItem("categoryId");
  }, []);

  return (
    <H2
      onClick={() => handleCategory(categoryId, category)}
      selectCategory={selectCategory}
      style={{
        borderLeft:
          selectCategory == "rgba(0, 0, 0, 0.782)"
            ? "solid 5px #b1c586"
            : "transparent",
      }}
    >
      {category}
    </H2>
  );
};
