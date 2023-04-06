import React, { useState } from "react";
import { ContainerHome } from "../home/Home";
import { useNavigate } from "react-router-dom";
import {
  ExternalLogin,
  FormSignin,
  H1,
  SigninContainer,
  SigninLeft,
  SigninRight,
} from "./SigninStyles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ButtonContainer } from "../../components/button/ButtonStyles";
import { postSignin } from "../../services/UserServices";

interface FormValues {
  email: string;
  password: string;
}

export const Signin: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, email: event.target.value });
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, password: event.target.value });
  };
  function handleForm(e: any) {
    e.preventDefault();
  }
  function createUser() {
    const signin = postSignin(formValues);
    signin
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.status);
      });
  }

  return (
    <ContainerHome>
      <SigninContainer>
        <SigninLeft>
          <p className="welcome">Welcome To</p>
          <h1>MyLinks</h1>
          <p className="textWelcome">
            save your favorite links <br /> in an intuitive and elegant way
          </p>
        </SigninLeft>
        <SigninRight>
          <H1>Login to start using or Register</H1>
          <ExternalLogin>
            <h2>
              <GoogleIcon />
              continue with Google
            </h2>
            <h2>
              <FacebookIcon />
              continue with facebook
            </h2>
          </ExternalLogin>
          <H1>OR</H1>
          <FormSignin onSubmit={handleForm}>
            <ButtonContainer type={"0%"}>
              <input
                type="text"
                value={formValues.email}
                onChange={handleNameChange}
              />
            </ButtonContainer>
            <ButtonContainer type={"0%"}>
              <input
                type="text"
                value={formValues.password}
                onChange={handleEmailChange}
              />
            </ButtonContainer>
            <div className="forgotPassword">
              <a>Forgot password</a>
            </div>

            <div>
              <button onClick={createUser}>Entrar</button>
              <p>
                if you are new here? <a>register</a> now
              </p>
            </div>
          </FormSignin>
        </SigninRight>
      </SigninContainer>
    </ContainerHome>
  );
};
