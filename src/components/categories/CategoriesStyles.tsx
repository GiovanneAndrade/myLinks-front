import styled from "styled-components";
interface ConteinerProps {
  type: {
    width: string;
    color: string;
    content: string;
    font: string;
    display: string;
    top:string,
    right:string
    position:string,
  };
}
interface SelectCategoryProps {
  selectCategory: string;
}
export const CategoriesConteiner = styled.div<ConteinerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.type.width};
  transition-duration: 0.4s;
  min-height: 60px;
  margin-right: 30px;
  overflow: auto;
  overflow: hidden;
  border: 2px solid rgba(253, 251, 251, 0.1);
  border-radius: 10px;
  padding: 45px 10px 20px 10px;
  gap: 20px;
  position: ${(props) => props.type.position};
  color: ${(props) => props.type.color};
  top:${(props) => props.type.top};
  right: ${(props) => props.type.right};
  
  div {
    cursor: pointer;
    
    width: 100%;
    height: 30px;
    position: ${(props) => props.type.position};
    top: 0;
    right: 0;
    color: #fff;
    font-size: ${(props) => props.type.font};
    opacity: 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgba(0, 0, 0, 0.782);
    border-bottom: solid 1px #b1c586;
    display: flex;
    align-items: center;

    justify-content: ${(props) => props.type.content};
    padding: 10px 25px;
    gap: 70px;
  }
  .arrowIcon {
    cursor: pointer;
    display: ${(props) => props.type.display};
    margin-left: -12px;
  }

 
`;
export const H2 = styled.h2<SelectCategoryProps>`
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
   background: ${(props) => props.selectCategory};
  font-size: 15px;
 
 

`;
