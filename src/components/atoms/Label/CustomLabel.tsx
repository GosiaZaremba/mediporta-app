import React from "react";

export type Props = {
  inputLabel: string;
  inputKey: string;
};

export const CustomLabel: React.FC<Props> = ({ inputLabel, inputKey }) => {
  return <label htmlFor={inputKey}>{inputLabel}</label>;
};
