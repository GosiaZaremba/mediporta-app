import React from "react";
import { CustomInput } from "../../atoms/Input/CustomInput";
import { CustomLabel } from "../../atoms/Label/CustomLabel";
import "./InputWLabel.css";

export type Props = {
  inputLabel: string;
  inputKey: "pageNumber" | "pageSize";
};

export const InputWLabel: React.FC<Props> = ({ inputLabel, inputKey }) => {
  return (
    <div className="input-label-container">
      <CustomLabel inputLabel={inputLabel} inputKey={inputKey} />
      <CustomInput inputKey={inputKey} />
    </div>
  );
};
