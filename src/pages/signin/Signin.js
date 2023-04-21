import React, { useEffect, useState } from "react";
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
import { postSignin, postSignup } from "../../services/UserServices";
import { Signup } from "../signup/Signup";
import { AuthContext } from "../../providers/auth";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";

export const Signin = () => {
  const notify = () => toast("Em Breve!");
  const { user, setUser, loading, setLoading } = React.useContext(AuthContext);
  const [passwordError, setPasswordError] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setFormValues({ ...formValues, email: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setFormValues({ ...formValues, password: event.target.value });
  };
  const handleNameChange = (event) => {
    setFormValues({ ...formValues, name: event.target.value });
  };

  const handleConfirmPasswordChange = (event) => {
    setFormValues({ ...formValues, confirmPassword: event.target.value });
  };

  function handleForm(e) {
    e.preventDefault();
  }
  function createUser() {
    if (register && formValues.password !== formValues.confirmPassword) {
      return setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setLoading(true)
    if (!register) {
      const signin = postSignin({
        email: formValues.email,
        password: formValues.password,
      });
      signin
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("tokenMyLink", JSON.stringify(response.data));
          setUser(response.data.token);
          navigate("/home");
          setLoading(false)
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.response.data.message);
          alert(error.response.status);
          setLoading(false)
        });
    } else {
      const signup = postSignup(formValues);
      signup
        .then((response) => {
          console.log(response.data);
          setRegister(false);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setLoading(false)
          alert(error.response.data.message);
        });
    }
  }
  function newLogin() {
    setRegister(false);
    setFormValues({ email: "", password: "", name: "", confirmPassword: "" });
    setPasswordError(false);
  }
  function newRegister() {
    setRegister(true);
    setFormValues({ email: "", password: "", name: "", confirmPassword: "" });
    setPasswordError(false);
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
            <h2 onClick={() => notify()}>
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
            {register ? (
              <ButtonSignin type={"0%"}>
                <input
                  type="text"
                  placeholder="nome do usuário"
                  value={formValues.name}
                  onChange={handleNameChange}
                />
              </ButtonSignin>
            ) : null}

            <ButtonSignin type={"0%"}>
              <input
                type="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleEmailChange}
              />
            </ButtonSignin>
            <ButtonSignin type={"0%"} border={passwordError}>
              <input
                type="password"
                placeholder="senha"
                value={formValues.password}
                onChange={handlePasswordChange}
              />
            </ButtonSignin>
            {register ? (
              <ButtonSignin type={"0%"}>
                <input
                  type="password"
                  placeholder="confirme a senha"
                  value={formValues.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </ButtonSignin>
            ) : null}
            <div className="forgotPassword">
              <a className="forgout">Forgot password</a>
            </div>

            <div>
              
              <LoadingButton
               className="loading"
                loading={loading}
                loadingPosition="center"
                variant="outlined"
                onClick={createUser}
                sx={{ color: "#000" }}
              >
                {register ? "Cadastrar" : "Entrar"}
              </LoadingButton>
              <p>
                {!register ? (
                  <>
                    if you are new here?
                    <a onClick={newRegister}> register</a> now
                  </>
                ) : (
                  <p>
                    Already have registration?
                    <a onClick={newLogin}>Login</a>
                  </p>
                )}
              </p>
            </div>
          </FormSignin>
        </SigninRight>
      </SigninContainer>
    </ContainerHome>
  );
};
