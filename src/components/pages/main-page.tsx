import React from "react";
import useFetchData, { Tag } from "../../hooks/useFetchData";
import { useAppSelector } from "../../hooks/storeHooks";
import { MainPageTemplate } from "../templates/MainPageTepmplate/mainPageTemplate";

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
      <MainPageTemplate data={tags} />
    </>
  );
};
