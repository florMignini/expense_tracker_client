import React from "react";
import { FormSelect, SelectOption } from "./SelectListStyle";
import { FormLabel, FormGroup } from "../modal/ModalStyle";

import Operation from "../../utils/Operation.json";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";

export default function SelectList({ title, handleChange }) {
  const { isLoading } = useSelector((store) => store.transactions);

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let data = Operation.response[title];

  if (!data) return null;
  // Este select condicional esta perfecto!

  return (
    <FormGroup>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {isLoading && <Spinner />}
      <FormSelect name={id} onChange={handleChange}>
        {data &&
          data.map((el) => (
            <SelectOption key={el} value={el}>
              {el}
            </SelectOption>
          ))}
      </FormSelect>
    </FormGroup>
  );
}
