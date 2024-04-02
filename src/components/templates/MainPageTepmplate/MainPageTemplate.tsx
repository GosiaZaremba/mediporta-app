import React, { useRef, useState } from "react";
import { DataTable } from "../../organisms/Table/DataTable";
import { Tag } from "../../../hooks/useFetchData";
import {
  InputLabelReference,
  InputWLabel,
} from "../../molecules/InputWLabel/InputWLabel";
import "./MainPageTemplate.css";
import { useDispatch } from "react-redux";
import { setNumber } from "../../../store/numberSlice";
import Button from "@mui/material/Button";
import { CustomSnackBar } from "../../atoms/CustomSnackBar/CustomSnackBar";

export type Props = {
  data: Tag[] | null;
};

export const MainPageTemplate: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState<boolean>(false);

  const pagesizeInputRef = useRef<InputLabelReference>(null);

  const getValues = () => {
    const newPageSize = parseInt(pagesizeInputRef.current?.getValue()!);
    if (newPageSize <= 100) {
      dispatch(
        setNumber({
          key: "pageSize",
          value: newPageSize,
        })
      );
      setError(false);
    } else {
      setError(true);
    }
  };
  const handleClose = () => {
    setError(false);
  };

  return (
    <div className="main-page">
      <h1>StackOverflow Tags</h1>
      <div className="input-container">
        <InputWLabel
          inputLabel="Page size"
          inputKey="pageSize"
          ref={pagesizeInputRef}
          error={error}
        />
        <Button onClick={getValues} variant="contained" color="primary">
          Go!
        </Button>
        <CustomSnackBar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={error}
          message="Maximum page size is 100"
          onClose={handleClose}
        />
      </div>
      <DataTable data={data} />
    </div>
  );
};
