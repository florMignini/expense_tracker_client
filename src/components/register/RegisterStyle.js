import styled from "styled-components";
import { Link } from "react-router-dom";

import { LogIn } from "@styled-icons/ionicons-outline/LogIn";
import { Fingerprint } from "@styled-icons/material-sharp/Fingerprint";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
`;
export const TitleContainer = styled.div`
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  margin: 0.5rem;
  font-size: 3rem;
  word-spacing: 0.5rem;
  font-weight: 600;
  color: #ced4da;
`;
export const FormContainer = styled.div`
  z-index: 3;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 20px;
`;
export const FormWrapper = styled.form`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`;
export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0.5rem;
  color: #ced4da;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const FormInput = styled.input`
  width: 75%;
  height: 5%;
  border: solid 1px #ced4da;
  background-color: transparent;
  border-radius: 10px;
  text-align: center;
  color: #ced4da;
  font-size: 1.5rem;
  font-weight: 200;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SubmitButton = styled.button`
  width: 30%;
  height: 10%;
  font-size: 5vw;
  font-weight: 200;
  border: solid 0.2rem #ced4da;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #ced4da;
  text-align: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  &:focus,
  &:hover {
    background-color: black;
    color: #ced4da;
  }
`;

export const LogInIcon = styled(LogIn)`
  width: 10%;
  color: #1a4876;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin-right: 2rem;
`;
export const Message = styled.p`
  color: red;
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const FingerprintIcon = styled(Fingerprint)`
  width: 10%;
  color: #1a4876;
  display: inline-block;
  overflow: hidden;
`;

export const ButtonContainer = styled(Link)`
  width: 30%;
  color: #009acd;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-radius: 8%;
  font-size: 1.5rem;
  list-style: none;
`;
