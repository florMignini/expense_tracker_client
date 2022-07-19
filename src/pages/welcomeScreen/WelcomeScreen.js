import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroData,
  HeroBtnContainer,
  HeroBtnContainerTitle,
  HeroIntroSection,
  GetStartedButton,
  ArrowForwardIosIcon,
} from "./WelcomeScreenStyle";
import Video from "../../../public/videoHero.mp4";
export default function WelcomeScreen() {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroIntroSection>
          <HeroTitle>Expense Tracker App</HeroTitle>
          <HeroData>The Easy Way To Follow your Expenses </HeroData>
        </HeroIntroSection>
        <HeroBtnContainer>
          <HeroBtnContainerTitle>Let's get started</HeroBtnContainerTitle>
          <GetStartedButton
            onClick={() => {
              navigate("/login");
            }}
          >
            Login <ArrowForwardIosIcon />
          </GetStartedButton>
          <GetStartedButton
            onClick={() => {
              navigate("/register");
            }}
          >
            Register <ArrowForwardIosIcon />
          </GetStartedButton>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
}
