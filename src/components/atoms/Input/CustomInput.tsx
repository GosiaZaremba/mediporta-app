import React from "react";
import Input from "@mui/material/Input";
import "./CustomInput.css";

export type Props = {
  inputLabel: string;
};

export const CustomInput: React.FC<Props> = ({ inputLabel }) => {
  return (
    <div>
      <Input placeholder={inputLabel} color="secondary" type="number" />
    </div>
  );
};
