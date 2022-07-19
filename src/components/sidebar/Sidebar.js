import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, reset } from "../../features/auth/authSlice";

import {
  CloseIcon,
  CloseIconWrapper,
  Container,
  Links,
  LinksWrapper,
  MenuWrapper,
  WelcomeMessageSidebar,
} from "./SidebarStyle";

export default function Sidebar({ openSidebar, isOpen }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const size = user.email.indexOf("@");
  const WelcomedUser = user.email.slice(0, size);
  return (
    <Container isOpen={isOpen} onClick={openSidebar}>
      <CloseIconWrapper onClick={openSidebar}>
        <CloseIcon />
      </CloseIconWrapper>
      <LinksWrapper>
        <MenuWrapper>
          <WelcomeMessageSidebar>{`Welcome ${WelcomedUser}`}</WelcomeMessageSidebar>
          <Links
            onClick={() => {
              dispatch(logoutUser());
              dispatch(reset());
            }}
            to="/login"
          >
            Change account
          </Links>
        </MenuWrapper>
      </LinksWrapper>
    </Container>
  );
}
