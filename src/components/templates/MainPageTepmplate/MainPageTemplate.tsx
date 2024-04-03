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
import { CustomSnackBar } from "../../atoms/CustomSnackBar/CustomSnackBar";
import { useAppSelector } from "../../../hooks/storeHooks";

export type Props = {
  data: Tag[] | null;
};

export const MainPageTemplate: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
    const urlParams = useAppSelector((state) => state.URLparams);

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const pagesizeInputRef = useRef<InputLabelReference>(null);

  const getValues = () => {
    const newPageSize = parseInt(pagesizeInputRef.current?.getValue()!);
    if (newPageSize <= 0) {
      setError(true);
      setErrorMsg("Minimum page size is 1");
    } else if (newPageSize > 100) {
      setError(true);
      setErrorMsg("Maximum page size is 100");
    } else {
      dispatch(
        setNumber({
          key: "pageSize",
          value: newPageSize,
        })
      );
      setError(false);
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
          onChange={getValues}
          defaultValue={urlParams['pageSize']}
        />
        {/* <Button onClick={getValues} variant="contained" color="primary">
          Go!
        </Button> */}
        <CustomSnackBar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={error}
          message={errorMsg}
          onClose={handleClose}
        />
      </div>
      <DataTable data={data} />
    </div>
  );
};
