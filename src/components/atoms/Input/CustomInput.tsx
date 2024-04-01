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
};

export const CustomInputWithReference: React.ForwardRefRenderFunction<
  CustomInputReference,
  Props
> = ({ inputKey }, ref) => {
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
    <div>
      <Input
        name={inputKey}
        color="secondary"
        type="number"
        inputRef={inputReference}
        defaultValue={urlParams[inputKey]}
      />
    </div>
  );
};

export const CustomInput = forwardRef(CustomInputWithReference);
