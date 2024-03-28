import React from "react";
import useFetchData, { Tag } from "../../hooks/useFetchData";
import { CustomInput } from "../atoms/Input/CustomInput";
import { useAppSelector } from "../../hooks/storeHooks";

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
    return <p>Ładowanie...</p>;
  }

  if (error) {
    return <p>Błąd: {error}</p>;
  }

  return (
    <div>
      <h1>Popularne tagi na Stack Overflow</h1>
      <CustomInput inputLabel="Page number" inputKey="pageNumber" />
      <CustomInput inputLabel="Page size" inputKey="pageSize" />
      <ol>
        {tags?.map((tag, index) => (
          <li key={index}>
            <strong>{tag.name}</strong> - Liczba wystąpień: {tag.count}
          </li>
        ))}
      </ol>
    </div>
  );
};
