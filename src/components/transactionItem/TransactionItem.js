import React, { useState } from "react";
import { format } from "timeago.js";
import SelectList from "../../utils/select/SelectList";
import {
  Container,
  TransactionContainerItems,
  TransactionName,
  TransactionDate,
  TrashIcon,
  IconStyles,
  ButtonsSection,
  PencilIcon,
} from "./TransactioItemStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTransaction,
  updateTransaction,
} from "../../features/transaction/transactionSlice";
import Modal from "../../utils/modal/Modal";
import {
  FormContainer,
  FormGroup,
  FormInput,
  FormLabel,
  FormTitle,
  SubmitButton,
} from "../../utils/modal/ModalStyle";

export default function TransactionItem() {
  const { transactions } = useSelector((store) => store.transactions);

  const [editItem, setEditItem] = useState(false);
  //modal state
  const [isOpen, setIsOpen] = useState(false);
  //form state
  const [amount, setAmount] = useState("$ 0");
  const [operation, setOperation] = useState(null);
  const [category, setCategory] = useState(null);
  const [idSelected, setIdSelected] = useState("");
  const dispatch = useDispatch();

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
    const newValues = {
      amount,
      operation,
      category,
    };
    const dataToUSe = {
      idSelected,
      newValues,
    };
    dispatch(updateTransaction(dataToUSe));
    closeModal();
  };
  return (
    <div>
      {transactions.map((item) => (
        <Container key={item.id}>
          <TransactionContainerItems>
            <TransactionName operation={item.operation}>
              {item.category}
            </TransactionName>
            <TransactionName operation={item.operation}>
              $ {item.amount}
            </TransactionName>
            <ButtonsSection>
              <IconStyles
                onClick={() => {
                  dispatch(deleteTransaction(item.id));
                }}
              >
                <TrashIcon />
              </IconStyles>
              <IconStyles
                onClick={() => {
                  setEditItem(!editItem);
                  setIdSelected(item.id);
                  openModal();
                }}
              >
                <PencilIcon />
              </IconStyles>
            </ButtonsSection>

            <TransactionDate operation={item.operation}>
              {format(item.createdAt)}
            </TransactionDate>
          </TransactionContainerItems>
        </Container>
      ))}

      {editItem && (
        <Modal open={isOpen} onClose={closeModal}>
          <FormContainer onSubmit={handleSubmit}>
            <FormTitle> EDIT TRANSACTION</FormTitle>
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
            <SubmitButton type="submit">edit transaction</SubmitButton>
          </FormContainer>
        </Modal>
      )}
    </div>
  );
}
