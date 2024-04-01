import React, { useRef } from "react";
import { DataTable } from "../../organisms/Table/DataTable";
import { Tag } from "../../../hooks/useFetchData";
import {
  InputLabelReference,
  InputWLabel,
} from "../../molecules/InputWLabel/InputWLabel";
import "./MainPageTemplate.css";
import { useDispatch } from "react-redux";
import { setNumber } from "../../../store/numberSlice";

export type Props = {
  data: Tag[] | null;
};

export const MainPageTemplate: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const pagesizeInputRef = useRef<InputLabelReference>(null);

  const getValues = () => {
    dispatch(
      setNumber({
        key: "pageSize",
        value: parseInt(pagesizeInputRef.current?.getValue()!),
      })
    );
  };
  return (
    <>
      <div className="inputs-container">
        <InputWLabel
          inputLabel="Page size"
          inputKey="pageSize"
          ref={pagesizeInputRef}
        />
        <button onClick={getValues}>Go!</button>
      </div>
      <DataTable data={data} />
    </>
  );
};
