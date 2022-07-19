import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser, reset } from "../../features/auth/authSlice";
import { HeroBg, VideoBg } from "../../pages/welcomeScreen/WelcomeScreenStyle";

import Spinner from "../../utils/spinner/Spinner";
import Video from "../../../public/videoHero.mp4";
import {
  Container,
  FormWrapper,
  FormContainer,
  Title,
  TitleContainer,
  FormInput,
  FormLabel,
  SubmitButton,
  LogInIcon,
  Message,
  ButtonContainer,
  FingerprintIcon,
} from "./RegisterStyle";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    Fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { Fullname, email, password, confirmPassword } = registerData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
    } else {
      const userData = {
        Fullname,
        email,
        password,
      };
      dispatch(registerUser(userData));
    }
  };
  const onChange = (e) => {
    setRegisterData((prevState) => ({
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
            {" "}
            <FingerprintIcon />
            Register Now!
          </Title>
        </TitleContainer>
        <FormWrapper onSubmit={onSubmit}>
          <FormLabel>Fullname</FormLabel>
          <FormInput
            autoFocus
            type="text"
            placeholder="Enter your fullname"
            required
            name="Fullname"
            value={Fullname}
            onChange={onChange}
          />
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
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            autoFocus
            type="password"
            placeholder="confirm password"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
          />
          <SubmitButton type="submit">Submit!</SubmitButton>
          <Message>
            Already registered?
            <ButtonContainer to="/login">
              <LogInIcon />
            </ButtonContainer>
          </Message>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
}
