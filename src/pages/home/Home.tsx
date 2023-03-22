import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/cards/Card";
import { CardContainer } from "../../components/cards/CardStyles";
import { Categories } from "../../components/categories/Categories";
import { Nav } from "../../components/nav/Nav";
export const Home = () => {
  return (
    <>
      <Nav />
      <ContainerHome>
        <Button />
        <Categories />
        <CardContainerHome>
          <Card />
          <Card />
           
        </CardContainerHome>
      </ContainerHome>
    </>
  );
};

const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;
const CardContainerHome = styled(CardContainer)`
 
 border-color:#f9f4f4;
  position: relative;
   
  
`;
