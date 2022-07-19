import React, { useEffect } from "react";
import {
  Container,
  ContentContainer,
  Title,
  TitleContainer,
  EmptyMessageContainer,
  EmptyMessage,
} from "./TransactionsStyle";

import Spinner from "../../utils/spinner/Spinner";
import TransactionItem from "../transactionItem/TransactionItem";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../features/transaction/transactionSlice";

export default function Transactions() {
  const dispatch = useDispatch();

  const { items, isLoading } = useSelector((store) => store.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [items]);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <TitleContainer>
            <Title>Last Movements</Title>
          </TitleContainer>
          {items < 1 ? (
            <EmptyMessageContainer>
              <EmptyMessage>You have no movements! </EmptyMessage>
            </EmptyMessageContainer>
          ) : (
            <ContentContainer>
              <TransactionItem />
            </ContentContainer>
          )}
        </Container>
      )}
    </div>
  );
}
