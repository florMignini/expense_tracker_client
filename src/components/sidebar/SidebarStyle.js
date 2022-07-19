import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(CloseOutline)`
  color: #7e9ca7;
  width: 10%;
`;
export const LinksWrapper = styled.div`
  color: blue;
`;
export const MenuWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 25rem);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 12rem);
  }
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #7e9ca7;
  cursor: pointer;
  &:hover {
    color: #1864ab;
    transition: 0.2s ease-in-out;
  }
`;
export const WelcomeMessageSidebar = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #7e9ca7;
`;
