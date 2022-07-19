import styled from "styled-components";

export const ContainerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ContainerContent = styled.div`
  background-color: #b9c9cf;
  display: block;
  text-align: center;
  width: 30%;
  border-radius: 2rem;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
export const CloseButton = styled.button`
  border: none;
  color: #2b3a3f;
  margin-top: 0.5rem;
  margin-right: -80%;
  font-size: 1.5rem;
  font-weight: 900;
  background-color: transparent;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  margin: 15%;
  position: relative;
`;

export const FormTitle = styled.h2`
  color: #2b3a3f;
  border-bottom: solid 1px #2b3a3f;
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
`;
export const FormGroup = styled.div`
  display: block;
`;
export const FormLabel = styled.label`
  font-weight: 600;
  color: #2b3a3f;
  font-size: 1.5rem;
`;

export const FormInput = styled.input`
  margin: 5% auto;
  display: block;
  color: #2b3a3f;
  text-align: center;
  background-color: transparent;
  border: solid 0.1rem #2b3a3f;
  border-radius: 5px;
  width: 50%;
  height: 25px;
  outline: none;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  margin: 15% auto;
  display: block;
  color: #2b3a3f;
  background-color: transparent;
  border: solid 0.2rem #2b3a3f;
  border-radius: 5px;
  width: 100%;
  height: 2.5rem;
  font-size: 1.5rem;
  font-weight: 800;
`;
