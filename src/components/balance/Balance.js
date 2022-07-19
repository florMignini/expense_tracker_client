import React from "react";
import { useEffect } from "react";
import PieChart from "../../utils/pieChart/PieChart";
import { useSelector, useDispatch } from "react-redux";
import { calculateBalance } from "../../features/transaction/transactionSlice";

import {
  BalanceData,
  Container,
  Title,
  BalanceContainerLeft,
  BalanceContainerRight,
  CharContainer,
  BalanceDataWrapper,
} from "./BalanceStyle";

const Resume = () => {
  const { items, balance } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBalance());
  }, [items]);

  return (
    <Container>
      <BalanceContainerLeft>
        <BalanceDataWrapper>
          <Title>Balance</Title>
          <BalanceData>{`${balance}`}</BalanceData>
        </BalanceDataWrapper>
      </BalanceContainerLeft>
      <BalanceContainerRight>
        <CharContainer>
          <PieChart />
        </CharContainer>
      </BalanceContainerRight>
    </Container>
  );
};

export default Resume;
