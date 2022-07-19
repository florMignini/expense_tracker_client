import styled from "styled-components";
import { ArrowForwardIos } from "@styled-icons/material-rounded/ArrowForwardIos";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const HeroIntroSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  color: #ced4da;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 3.5rem;
    margin: 0 auto;
  }
`;
export const HeroData = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: #ced4da;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const HeroBtnContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 45%;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const HeroBtnContainerTitle = styled.h2`
  color: #ced4da;
  font-size: 2.5rem;
  font-weight: 400;
  padding: 1rem;
`;
export const GetStartedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 20px;
  width: 80%;
  height: 20%;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 400;
  border: solid 0.1rem #1a4876;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #1a4876;
  margin-top: 1.5rem;
  &:focus,
  &:hover {
    background-color: #e7f5ff;
  }
`;

export const ArrowForwardIosIcon = styled(ArrowForwardIos)`
  width: 10%;
  color: #1a4876;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin-right: 2rem;
`;
