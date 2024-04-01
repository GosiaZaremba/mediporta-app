import React, { forwardRef, useImperativeHandle, useRef } from "react";
import {
  CustomInput,
  CustomInputReference,
} from "../../atoms/Input/CustomInput";
import { CustomLabel } from "../../atoms/Label/CustomLabel";
import "./InputWLabel.css";

export type InputLabelReference = {
  getValue: () => string;
};

export type Props = {
  inputLabel: string;
  inputKey: "pageNumber" | "pageSize";
};

export const InputLabelWithReference: React.ForwardRefRenderFunction<
  InputLabelReference,
  Props
> = ({ inputLabel, inputKey }, ref) => {
  const inputReference = useRef<CustomInputReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputReference.current?.getValue()!;
    },
  }));
  return (
    <div className="input-label-container">
      <CustomLabel inputLabel={inputLabel} inputKey={inputKey} />
      <CustomInput inputKey={inputKey} ref={inputReference} />
    </div>
  );
};

export const InputWLabel = forwardRef(InputLabelWithReference);
