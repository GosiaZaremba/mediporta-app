import React from "react";
import { DataTable } from "../../organisms/Table/DataTable";
import { Tag } from "../../../hooks/useFetchData";
import { InputWLabel } from "../../organisms/InputWLabel/InputWLabel";

export type Props = {
  data: Tag[] | null;
};

export const MainPageTemplate: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div>
        <InputWLabel inputLabel="Page number" inputKey="pageNumber" />
        <InputWLabel inputLabel="Page size" inputKey="pageSize" />
      </div>
      <DataTable data={data} />
    </>
  );
};
