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

export const Home = () => {
  const { link, newLink, setNewLink, showCard, categories, categoriesId } =
    React.useContext(AuthContext) as any;

  const resultCategory = categories?.filter((item: any) =>
    categoriesId?.includes(item.id)
  );
 
  const selectCategoryReverse = resultCategory?.map((item: any) => item.links);

  let newArr = selectCategoryReverse?.flat();

  newArr = newArr?.length === 0 ? newLink : newArr;

  const reversedArray = [];
  for (let i = newArr?.length - 1; i >= 0; i--) {
    reversedArray.push(newArr[i]);
  }
 
  useEffect(() => {
    setNewLink(link?.links);
  }, [link]);

  return (
    <>
      <Nav />
      <ContainerHome>
        <ToastContainer />
        <Button />
        <Categories />
        <div>
        <PaginationLink/>
        <CardContainerHome>
          <TransitionGroup
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              minWidth: "500px",
              gap: "20px",
            }}
          >
            {reversedArray.map((link: any, index: any) => (
              <CSSTransition key={link.id} classNames="fade" timeout={300}>
                 <Card
                  banner={link.banner}
                  description={link.description}
                  title={link.title}
                  website={link.website}
                  linkId={link.id}
                  list={link.link?.list}
                />
               {/*  <RecipeReviewCard
                  banner={link.banner}
                  description={link.description}
                  title={link.title}
                  website={link.website}
                  linkId={link.id}
                /> */}
              </CSSTransition>
            ))}
          </TransitionGroup>
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
  margin-left: -50px;
`;

const CardContainerHome = styled(CardContainer)`
  border-color: #f9f4f4;
  position: relative;

  .teste {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    min-width: 500px;
    min-height: 200px;
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
