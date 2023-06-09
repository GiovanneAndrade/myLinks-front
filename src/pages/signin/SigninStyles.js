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
  @media (max-width: 1200px) {
    @media (max-width: 1200px) {
      height: 500px;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    border-radius: 0;
    gap: 20px;
    width: 90%;
    top: 0;
    /* position: absolute; */
   
  }
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
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 0;
    padding: 20px;
    gap: 20px;
    .welcome {
      font-size: 20px;
    }
    .textWelcome {
      font-size: 20px;
      text-align: center;
    }
    h1 {
      font-size: 50px;
    }
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
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    border-right: none;

    padding-bottom: 20px;
    gap: 20px;
  }
`;
export const H1 = styled.h1`
  font-size: 30px;
  color: #fff;
  @media (max-width: 992px) {
    width: 100%;
    font-size: 20px;
    text-align: center;
  }
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
  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 8px;
    }
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
    margin-right: 20px;
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
  @media (max-width: 992px) {
    width: 110%;
    gap: 20px;
    div {
      font-size: 12px;

      justify-content: space-around;
    }
    .forgotPassword {
      margin-right: 40px;
    }
  }
`;

export const ButtonSignin = styled(ButtonContainer)`
  margin-top: 0;
  input {
    width: 100%;
  }
  @media (max-width: 540px) {
    width: 90%;
    gap: 20px;
  }
  ${(props) =>
    props.border &&
    `
    border: 2px solid red;
  `}
`;
