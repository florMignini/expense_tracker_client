import styled from "styled-components";
import { PlusCircleFill } from "@styled-icons/bootstrap/PlusCircleFill";

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  /*   background-color: #c5f6fa;
  border-top: solid 0.3rem #3bc9db;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px; */
`;
export const Button = styled.button`
  color: #7e9ca7;
  border: none;
  background-color: transparent;
  font-size: 5rem;
  font-weight: 400;
  border-radius: 50%;
  padding: 0.5rem;
  width: 10%;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 10%;
  }
  @media (max-width: 768px) {
    width: 15%;
  }
`;
export const PlusCircleFillIcon = styled(PlusCircleFill)`
  color: #7e9ca7;
`;
