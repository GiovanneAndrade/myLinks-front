import styled from "styled-components";

export const CardContainer = styled.div`
/*   display: grid;
  grid-template-columns: 1fr 1fr 1fr;  */
  //min-width: 500px;

  min-width: 100%;
  min-height: 200px;
  border-radius: 10px;
  padding: 30px;
  //margin-top: 40px;
 
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  //border: 1px solid rgba(253, 251, 251, 0.023);
 
`;
export const Cards = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  height: 100%;

  @media(max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    max-width: 90%;
    font-size: 12px;
    text-align: left;
    @media(max-width: 500px) {
      text-align: center;
    }
  }
  span {
    display: flex;
    max-width: 100%;
    max-height: 100vh;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    @media(max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Img = styled.h1`
  max-width: 100px;
  max-height: 100px;
  font-size: 15px;
  //background-color: #000;
  border: 2px solid rgba(29, 27, 27, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  @media(max-width: 500px) {
    margin-left: 0;
  }
  img {
    max-width: 100%;
    max-height: 100vh;
  }
`;
