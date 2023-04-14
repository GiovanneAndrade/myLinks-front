import styled from "styled-components";


export const CategoriesConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.type.width};
  transition-duration: 0.4s;
  min-height: 60px;
  /*  margin-right: 30px; */
  overflow: auto;
  overflow: hidden;
  border: 2px solid rgba(253, 251, 251, 0.1);
  border-radius: 10px;
  padding: ${(props) => props.type.padding};
  gap: 20px;
  position: ${(props) => props.type.position};
  color: ${(props) => props.type.color};
  top: ${(props) => props.type.top};
  right: ${(props) => props.type.right};
margin-right:10px;
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
  .edit {
    margin-left: -200px;
  }
  a {
    margin-left: 10px;
  }
  input {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    height: 35px;
    border: none;
    border-radius: 7px;
    padding: 10px;
    input:focus {
      outline: none;
    }
  }
  .check{
    display:flex;
    width:150px;
    display:flex;
    align-items: center;
    gap:10px;
    white-space: nowrap;
  }
  
`;
export const H2 = styled.h2`
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

export const AddCategory = styled(H2)`
  justify-content: center;
  border-radius: 7px;
`;
export const AddCategoryContainer = styled(AddCategory)`
  min-height: 70px;
  flex-direction: column;
  padding: 0;
  gap: 10px;
`;
export const Buttons = styled.span`
  width: 100%;
  display: flex;
  margin-top: 10px;
  gap: 10px;
 
`;
export const ButtonPush = styled.button`
    background:${props => props.showButton ? 'gray' : 'rgba(0, 0, 0, 0.782)'};
    width:80px;
    height: 30px;
    color:#fff;
    border:none;
    border-radius:10px;
    cursor:${props => props.showButton ? 'auto' : 'pointer'};

`;
export const ButtonCancel = styled(ButtonPush)`
    background:${props => props.showButton ? 'rgba(0, 0, 0, 0.782)' : 'rgba(0, 0, 0, 0.782)'};
    cursor:${props => props.showButton ? 'pointer' : 'pointer'};
`;