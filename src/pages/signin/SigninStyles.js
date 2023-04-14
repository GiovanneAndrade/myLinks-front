import styled from "styled-components";
import { ButtonContainer } from "../../components/button/ButtonStyles";

export const SigninContainer = styled.div`
  width: 1100px;
  height: 600px;
  display: flex;
  /*   background-image: linear-gradient(
    to right,
    #051937,
    #003d5c,
    #006369,
    #1f865e,
    #87a34e
  ); */

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const SigninLeft = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.782);
  
  border-radius: 10px 0 0 10px;
  gap: 50px;
  
  .welcome {
    font-size: 30px;
  }
  h1 {
    font-size: 70px;
  }
  .textWelcome {
    font-size: 20px;
    text-align: center;
  }
`;
export const SigninRight = styled.div`
 
  width: 55%;
  height: 100%;
  background-color: transparent;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 0 10px 10px 0;
`;
export const H1 = styled.h1`
  font-size: 30px;
  color: #fff;
`;
export const ExternalLogin = styled.div`
  display: flex;
  gap: 10px;
  font-size: 10px;
  align-items: center;
  text-align: center;
  h2 {
    border-radius: 10px;
    width: 200px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.782);
    display: flex;
    gap: 10px;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
  }
`;
export const FormSignin = styled.form`
 
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div {
    width: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }
  .forgotPassword {
    width: 100%;
    display: flex;
    justify-content: right;
  }

  button {
    transition-duration: 0.1s;
    background-image: linear-gradient(
      to right,
      #051937,
      #003d5c,
      #006369,
      #1f865e,
      #87a34e
    );
    border: solid 0.1px #000;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    color: #fff;
    cursor: pointer;
  }
`;

export const ButtonSignin = styled(ButtonContainer)`
 margin-top: 0;
`

