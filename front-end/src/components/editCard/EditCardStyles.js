import styled from "styled-components";

export const EditCardContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  input {
    width: 80%;
    height: 30px;
    border-radius: 7px;
    border: none;
    color: white;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.782);
  
  }
  div {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  span{
    width:80%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
  }
`;


