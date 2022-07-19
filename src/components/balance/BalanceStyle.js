import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 4rem auto;
  box-shadow: rgba(126, 156, 167, 0.25) 0px 54px 55px,
    rgba(126, 156, 167, 0.12) 0px -12px 30px,
    rgba(126, 156, 167, 0.12) 0px 4px 6px,
    rgba(126, 156, 167, 0.17) 0px 12px 13px,
    rgba(126, 156, 167, 0.09) 0px -3px 5px;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    height: 25%;
  }
`;
export const BalanceContainerLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const BalanceContainerRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled.h2`
  color: #2b3a3f;
  width: 100%;
  height: 25%;
  margin: 0;
  text-align: center;
  font-weight: 600;
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
  }
`;
export const BalanceData = styled.h3`
  color: #2b3a3f;
  width: 100%;
  height: 25%;
  margin: 0;
  text-align: center;
  font-weight: 400;
  font-size: 3.5rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const CharContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const BalanceDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
