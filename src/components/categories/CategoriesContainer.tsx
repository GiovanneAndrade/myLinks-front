import React, { useState } from "react";
import { H2 } from "./CategoriesStyles";
import { NavLink } from "react-router-dom";
export const CategoriesContainer = ({
  category,
  categoryId,
}: {
  category: string;
  categoryId: number;
}) => {
  const [selectCategory, setSelectCategory] = useState("#b1c586");
  const [selectedCategory, setSelectedCategory] = useState();

  function handleCategory(category: any) {
    setSelectedCategory(category);
    if (selectCategory === "#b1c586") {
      return setSelectCategory("rgba(0, 0, 0, 0.782)");
    }
    if (selectCategory === "rgba(0, 0, 0, 0.782)") {
      return setSelectCategory("#b1c586");
    }
  }
  return (
    <H2
      onClick={() => handleCategory(categoryId)}
      selectCategory={selectCategory}
      style={{ borderLeft: selectCategory == "rgba(0, 0, 0, 0.782)" ?  'solid 5px #b1c586' :'transparent'}}
    >
      {category}
    </H2>
  );
};

/* import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function CategoriesContainers() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        sx={{
          display: "flex",
          background: "transparent",
          height: "200px",
          flexDirection: "row-reverse",
        }}
      >
        <Tab label="Item One" sx={{ borderLeft: 1, borderColor: "divider" }} />

        <Tab
          label="Item Two"
          onClick={(e) => {
            handleChange(e, 1);
          }}
        />
        <Tab
          sx={{ background: "#b1c586" }}
          label="Item Three"
          onClick={(e) => {
            handleChange(e, 2);
          }}
        />
      </Tabs>
    </Box>
  );
} */
