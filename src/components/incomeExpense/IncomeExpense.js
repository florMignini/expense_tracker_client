import React, { useState } from "react";
import Modal from "../../utils/modal/Modal";
import {
  FormContainer,
  FormInput,
  FormLabel,
  FormGroup,
  FormTitle,
  SubmitButton,
} from "../../utils/modal/ModalStyle";

import { Button, Container, PlusCircleFillIcon } from "./IncomeExpenseStyle";
import SelectList from "../../utils/select/SelectList";
import { useDispatch } from "react-redux";
import { createTransaction } from "../../features/transaction/transactionSlice";

export default function IncomeExpense() {
  const dispatch = useDispatch();
  //modal state
  const [isOpen, setIsOpen] = useState(false);

  //form state
  const [amount, setAmount] = useState("$ 0");
  const [operation, setOperation] = useState(null);
  const [category, setCategory] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setAmount("");
    setOperation("");
    setCategory("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //create the new transaction
    const newTransaction = {
      amount,
      operation,
      category,
    };
    dispatch(createTransaction(newTransaction));
    closeModal();
  };

  return (
    <Container>
      <Button onClick={openModal}>
        <PlusCircleFillIcon />
      </Button>
      <Modal open={isOpen} onClose={closeModal}>
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle> NEW TRANSACTION</FormTitle>
          <FormGroup>
            <FormLabel>Amount</FormLabel>
            <FormInput
              value={amount}
              type="number"
              pattern="[0-9]{0,13}"
              placeholder="$       "
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setAmount(value);
              }}
              name="amount"
              required
            />
          </FormGroup>
          <SelectList
            title="operation"
            handleChange={(e) => {
              setOperation(e.target.value);
            }}
            value={operation}
            required
          />

          {operation && (
            <SelectList
              title={operation}
              handleChange={(e) => {
                setCategory(e.target.value);
              }}
              value={category}
              required
            />
          )}
          <SubmitButton type="submit">add transaction</SubmitButton>
        </FormContainer>
      </Modal>
    </Container>
  );
}
