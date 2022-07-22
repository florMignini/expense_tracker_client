import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 100vh;
  display: block;
  text-align: -moz-center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: solid 0.15rem #2b3a3f;
`;
export const Title = styled.h2`
  color: #2b3a3f;
  font-size: 3rem;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

export const EmptyMessageContainer = styled.header`
  height: 25%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EmptyMessage = styled.h4`
  color: #2b3a3f;
  font-size: 3rem;
  font-weight: 200;
`;

export const ContentContainer = styled.div`
  height: auto;
  width: 99vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
