import styled from "styled-components";
import { SignInAlt } from "@styled-icons/fa-solid/SignInAlt";
import { User } from "@styled-icons/entypo/User";
import { PowerOff } from "@styled-icons/boxicons-regular/PowerOff";
import { Menu } from "@styled-icons/ionicons-solid/Menu";

export const Container = styled.div`
  width: 99vw;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #b9c9cf;
  border: solid 0.3rem #d0e0ee;
  border-radius: 20px;
  margin: 0.1rem auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftNav = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    justify-content: center;
    width: 90%;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: #2b3a3f;
  font-weight: 900;
  font-size: 5rem;
  margin: 1rem auto;
  @media (max-width: 1200px) {
    font-size: 4rem;
    margin-left: 3rem;
  }
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 4.5rem;
    margin-left: 0;
    text-align: center;
  }
`;
export const RightNav = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 35%;
  }
  @media (max-width: 768px) {
    width: 70%;
    display: none;
  }
`;
export const WelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;
export const WelcomeMessage = styled.h3`
  word-spacing: 0.5rem;
  font-size: 1.8rem;
  color: #2b3a3f;
  font-weight: 400;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
/* export const UserId = styled.button`
  color: #009acd;
  font-size: 4rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`; */
/* export const ButtonsContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c5f6fa;
  color: #009acd;
`; */

export const AuthButton = styled.button`
  width: 30%;
  color: #2b3a3f;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-radius: 8%;
  font-size: 1.5rem;
  list-style: none;
  font-weight: 200;
  padding: 0.4rem;
  margin-right: 1.1rem;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;
export const SignInAltIcon = styled(SignInAlt)`
  color: #009acd;
  width: 55%;
`;
export const UserIcon = styled(User)`
  color: #009acd;
  width: 55%;
`;
export const PowerOffIcon = styled(PowerOff)`
  color: #2b3a3f;
  width: 25%;
`;
export const MenuIcon = styled(Menu)`
  color: #7e9ca7;
  width: 10%;
`;
