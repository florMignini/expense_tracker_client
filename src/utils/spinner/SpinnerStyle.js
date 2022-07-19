import styled, { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
`;
const SpinnerAnimation = keyframes`
    from{
    transform: rotate(0deg);
  }
    to{
        transform: rotate(360deg);
    }
`;
export const SpinnerLoading = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #009acd; /* Cambiar colores aca */
  border-top: 10px solid #98f5ff; /* y aca */
  border-radius: 50%;
  animation: ${SpinnerAnimation} 1.5s linear infinite;
`;
