import React from "react";
import { ButtonSignin, FormSignin } from "../signin/SigninStyles";

export const Signup = () => {
  return (
    <>
        <ButtonSignin type={"0%"}>
        <input type="password" placeholder="nome do usuario" />
      </ButtonSignin>
      <ButtonSignin type={"0%"}>
        <input type="email" placeholder="email" />
      </ButtonSignin>
      <ButtonSignin type={"0%"}>
        <input type="password" placeholder="senha" />
      </ButtonSignin>
      <ButtonSignin type={"0%"}>
        <input type="password" placeholder="confirme a senha" />
      </ButtonSignin>
      
    </>
  );
};
