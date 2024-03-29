import React from "react";
import useFetchData, { Tag } from "../../hooks/useFetchData";
import { CustomInput } from "../atoms/Input/CustomInput";
import { useAppSelector } from "../../hooks/storeHooks";
import { DataTable } from "../organisms/Table/Table";

export const SomeComponent: React.FC = () => {
  const numbers = useAppSelector((state) => state.numbers);
  const {
    data: tags,
    loading,
    error,
  } = useFetchData<Tag>(
    numbers.pageNumber.toString(),
    numbers.pageSize.toString()
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div>
        <h1>Popular Tags on StackOverflow</h1>
        <CustomInput inputLabel="Page number" inputKey="pageNumber" />
        <CustomInput inputLabel="Page size" inputKey="pageSize" />
      </div>
      <div>
        <DataTable data={tags} />
      </div>
    </>
  );
};
