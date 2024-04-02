import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Input from "@mui/material/Input";
import "./CustomInput.css";
import { useAppSelector } from "../../../hooks/storeHooks";

export type CustomInputReference = {
  getValue: () => string | undefined;
};

export type Props = {
  inputKey: "pageNumber" | "pageSize";
  error: boolean;
};

export const CustomInputWithReference: React.ForwardRefRenderFunction<
  CustomInputReference,
  Props
> = ({ inputKey, error }, ref) => {
  const urlParams = useAppSelector((state) => state.URLparams);

  const inputReference = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputReference.current) {
      inputReference.current.value = urlParams[inputKey].toString();
    }
  }, [urlParams, inputKey]);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputReference.current?.value!;
    },
  }));

  return (
    <Input
      name={inputKey}
      color="secondary"
      type="number"
      inputRef={inputReference}
      defaultValue={urlParams[inputKey]}
      error={error}
    />
  );
};

export const CustomInput = forwardRef(CustomInputWithReference);
