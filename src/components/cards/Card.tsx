import React, { useState } from "react";
import styled from "styled-components";
import { CategoriesContainer } from "../categories/CategoriesContainer";
import { CategoriesConteiner } from "../categories/CategoriesStyles";
import { CardContainer } from "./CardStyles";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
export const Card = () => {
  const listCategories = [
    { id: 1, title: "Links de Noticias" },
     { id: 2, title: "Links de Favoritos" },
    { id: 3, title: "Links Mais Acessados" },
    { id: 4, title: "Ultimos Adicionados" },
    { id: 5, title: "Blogs" },
    { id: 6, title: "Todos os Links" }, 
  ];
  const [show, setShow] = useState({
    width: "475px",
    color: "null",
    content: "space-between",
    font: "15px",
    display: "block",
    top: "null",
    right: "null",
    position: "relative",
  });
  return (
    
      <CategoriesConteiner type={show}>
        <div>
          <DoubleArrowIcon className="arrowIcon" />
          Categories
        </div>
        <Teste>
          <Img>teste img</Img>
          <p>
             público para dar adeus ao sonho de
            ser o mais novo milionário do pedaço.
            público para dar adeus ao sonho de
            ser o mais novo milionário do pedaço.
          </p>
        </Teste>
        <a href="">https://dol.com.br/entretenimento/fama/801129/bbb-23-impedido-fred-e-eliminado-com-5023-dos-votos?d=1</a>
      </CategoriesConteiner>
    
  );
};

export const Teste = styled.span`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 100%;

  height: 100%;
  p{
    max-width: 70%;
    height: 100%;
    text-align: left;
  }
`;
export const Img = styled.h1`
  width: 100px;
  height: 100px;
  font-size: 15px;
  background-color: #000;
`;
