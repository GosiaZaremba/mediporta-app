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
  error: boolean;
  defaultValue: number
  onChange: () => void;
};

export const InputLabelWithReference: React.ForwardRefRenderFunction<
  InputLabelReference,
  Props
> = ({ inputLabel, inputKey, error, defaultValue, onChange }, ref) => {
  const inputReference = useRef<CustomInputReference>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputReference.current?.getValue()!;
    },
  }));
  return (
    <>
      <CustomLabel inputLabel={inputLabel} inputKey={inputKey} />
      <div className="input">
        <CustomInput
          inputKey={inputKey}
          ref={inputReference}
          error={error}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export const InputWLabel = forwardRef(InputLabelWithReference);
