import React from "react";

import {
  Container,
  LeftNav,
  RightNav,
  Title,
  AuthButton,
  WelcomeContainer,
  WelcomeMessage,
  PowerOffIcon,
  MobileIcon,
  MenuIcon,
} from "./NavbarStyle";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ openSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/");
  };
  const size = user.email.indexOf("@");
  const WelcomedUser = user.email.slice(0, size);
  return (
    <div>
      <Container>
        <MobileIcon onClick={openSidebar}>
          <MenuIcon />
        </MobileIcon>
        <LeftNav>
          <Title>Expense Tracker</Title>
        </LeftNav>
        <RightNav>
          <WelcomeContainer>
            <WelcomeMessage>{`Welcome ${WelcomedUser}`}</WelcomeMessage>
            <AuthButton onClick={onLogout}>
              <PowerOffIcon />
            </AuthButton>
          </WelcomeContainer>
        </RightNav>
      </Container>
    </div>
  );
};

export default Navbar;
