import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/cards/Card";
import { CardContainer } from "../../components/cards/CardStyles";
import { Categories } from "../../components/categories/Categories";
import { Nav } from "../../components/nav/Nav";
import { AuthContext } from "../../providers/auth";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import RecipeReviewCard from "../../components/teste/Teste";
import PaginationLink from "../../components/pagination/Pagination";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import YouTube from "../../components/button/skeleton/Skeleton";
import { Grid } from "@mui/material";
import { EditCard } from "../../components/editCard/EditCard";

export const Home = () => {
  const {
    link,
    newLink,
    setNewLink,
    showCard,
    categories,
    clickedLinkId,
    setClickedLinkId,
    newCategory,
  } = React.useContext(AuthContext);

  
  useEffect(() => {
    setNewLink(categories?.filter((c) => c.id === 0)[0]?.links);
  }, [categories]);
  
  const reversedArray = [];
  for (let i = newLink?.length - 1; i >= 0; i--) {
    reversedArray.push(newLink[i]);
  }

  return (
    <>
      {/* <Nav /> */}
      <ContainerHome>
        <ToastContainer />
        <Button />

        <div style={{ width: "95%", maxWidth: "1600px" }}>
          <Pagintion>
            <PaginationLink />
            <div>
              <DeleteIcon />
              <EditIcon />
            </div>
          </Pagintion>

          <CardContainerHome>
            {!newLink?.length ? (
              <YouTube />
            ) : (
              <TransitionGroup className="transition">
                {reversedArray?.map((link, index) => (
                  <CSSTransition key={link?.id} classNames="fade" timeout={300}>
                    {clickedLinkId === link?.id ? (
                      <EditCard />
                    ) : (
                      
                      <Card
                        banner={link.banner}
                        description={link.description}
                        title={link.title}
                        website={link.website}
                        linkId={link?.id}
                        list={link.link?.list}
                      />
                    )}
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )}
          </CardContainerHome>
        </div>
      </ContainerHome>
    </>
  );
};

export const ContainerHome = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

const CardContainerHome = styled(CardContainer)`
  border-color: #f9f4f4;
  position: relative;

  .transition {
    display: grid;
    /* gridTemplateColumns: "1fr 1fr 1fr ",
    minWidth: "500px",
    gap: "20px", */
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    column-gap: 2rem;
    row-gap: 1rem;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .fade {
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1900ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
`;

export const Pagintion = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 44px 20px 25px;
  margin-top: 50px;
  div {
    display: flex;
    gap: 17px;
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    margin: 2rem 0;
    padding: 0;
    gap: 1rem;
  }
`;
