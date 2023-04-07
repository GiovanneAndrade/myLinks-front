import React, { useState } from "react";
import { ContainerHome } from "../home/Home";
import { useNavigate } from "react-router-dom";
import {
  ButtonSignin,
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
import { Signup } from "../signup/Signup";
import { AuthContext } from "../../providers/auth";

interface FormValues {
  email: string;
  password: string;
}

export const Signin: React.FC = () => {
  const { user, setUser } = React.useContext(
    AuthContext
  ) as any;
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);
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
        localStorage.setItem("tokenMyLink", JSON.stringify(response.data));
        setUser(response.data.token)
        navigate("/home");
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
            {!register ? (
              <>
                <ButtonSignin type={"0%"}>
                  <input
                    type="email"
                    placeholder="email"
                    value={formValues.email}
                    onChange={handleNameChange}
                  />
                </ButtonSignin>
                <ButtonSignin type={"0%"}>
                  <input
                    type="password"
                    placeholder="senha"
                    value={formValues.password}
                    onChange={handleEmailChange}
                  />
                </ButtonSignin>
              </>
            ) : (
              <Signup />
            )}

            <div className="forgotPassword">
              <a>Forgot password</a>
            </div>

            <div>
              <button onClick={createUser}>
                {register ? "Cadastrar" : "Entrar"}
              </button>
              <p>
                {!register ? (
                  <>
                    if you are new here?
                    <a onClick={() => setRegister(true)}> register</a> now
                  </>
                ) : (
                  <p> Already have registration? <a onClick={() => setRegister(false)}>Login</a> </p>
                 
                )}
              </p>
            </div>
          </FormSignin>
        </SigninRight>
      </SigninContainer>
    </ContainerHome>
  );
};
