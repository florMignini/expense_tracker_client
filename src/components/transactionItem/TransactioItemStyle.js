import styled from "styled-components";
import { Trash } from "@styled-icons/bootstrap/Trash";
import { Pencil } from "@styled-icons/bootstrap/Pencil";
export const OuterContainer = styled.div`
  width: 99vw;
  margin: 5rem 2rem;
`;
export const Container = styled.div`
  height: auto;
  width: 90vw;
  display: inline-block;
  align-items: center;
  margin: 2rem 0rem;
  border-radius: 20px;
  box-shadow: rgba(126, 156, 167, 0.55) 0px 5px 15px;
`;

export const TransactionContainerItems = styled.div`
  height: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const TransactionName = styled.h4`
  display: grid;
  align-content: center;
  color: ${(props) => (props.operation === "income" ? "#2b8a3e" : "#ff2500")};
  font-size: 2.5rem;
  font-weight: 600;
  margin: 1rem;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const TransactionDate = styled.h4`
  display: grid;
  align-content: center;
  color: ${(props) => (props.operation === "income" ? "#2b8a3e" : "#ff2500")};
  font-size: 1.2rem;
  font-weight: 400;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const TrashIcon = styled(Trash)`
  color: #7e9ca7;
  width: 100%;
`;
export const IconStyles = styled.button`
  width: 9%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin: 1rem;
  @media (max-width: 1024px) {
    width: 12%;
  }
  @media screen and (max-width: 768px) {
    width: 14%;
  }
  @media screen and (max-width: 480px) {
    width: 17%;
  }
`;
export const PencilIcon = styled(Pencil)`
  color: #7e9ca7;
  width: 100%;
`;
export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
