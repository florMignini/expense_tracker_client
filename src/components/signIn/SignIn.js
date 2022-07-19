import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser, reset } from "../../features/auth/authSlice";
import { HeroBg, VideoBg } from "../../pages/welcomeScreen/WelcomeScreenStyle";

import Spinner from "../../utils/spinner/Spinner";
import Video from "../../../public/videoHero.mp4";
import {
  Container,
  FormInput,
  FormLabel,
  FormWrapper,
  Title,
  TitleContainer,
  SubmitButton,
  LogInIcon,
  Message,
  ButtonContainer,
  FingerprintIcon,
  FormContainer,
} from "../register/RegisterStyle";

export default function SignIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = loginData;

  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(loginUser(userData));
  };

  const onChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <FormContainer>
        <TitleContainer>
          <Title>
            <LogInIcon />
            Sign In!
          </Title>
        </TitleContainer>
        <FormWrapper onSubmit={onSubmit}>
          <FormLabel>Email</FormLabel>
          <FormInput
            autoFocus
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            value={email}
            onChange={onChange}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            autoFocus
            type="password"
            placeholder="Enter password"
            required
            name="password"
            value={password}
            onChange={onChange}
          />
          <SubmitButton type="submit">Submit!</SubmitButton>
          <Message>
            not registered yet?
            <ButtonContainer to="/register">
              <FingerprintIcon />
            </ButtonContainer>
          </Message>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
}
