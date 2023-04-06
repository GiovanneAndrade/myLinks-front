import React, { useState } from "react";
import { H2 } from "./CategoriesStyles";
export const CategoriesContainer = ({
  category,
  categoryId,
}: {
  category: string;
  categoryId: number;
}) => {
  const [selectCategory, setSelectCategory] = useState("#424e29");

  function handleCategory(category: any) {
    if (selectCategory === "#424e29") {
      return setSelectCategory("rgba(0, 0, 0, 0.782)");
    }
    if (selectCategory === "rgba(0, 0, 0, 0.782)") {
      return setSelectCategory("#424e29");
    }
  }
  return (
    <H2
      onClick={() => handleCategory(categoryId)}
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
