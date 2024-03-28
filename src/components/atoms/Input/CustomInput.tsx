import React from "react";
import Input from "@mui/material/Input";
import "./CustomInput.css";
import { useDispatch } from "react-redux";
import { setNumber } from "../../../store/numberSlice";
import { useAppSelector } from "../../../hooks/storeHooks";

export type Props = {
  inputLabel: string;
  inputKey: "pageNumber" | "pageSize";
};

export const CustomInput: React.FC<Props> = ({ inputLabel, inputKey }) => {
  const dispatch = useDispatch();
  const value = useAppSelector((state) => state.numbers[inputKey]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    dispatch(setNumber({ key: inputKey, value: newValue }));
  };

  return (
    <div>
      <Input
        placeholder={inputLabel}
        color="secondary"
        type="number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
