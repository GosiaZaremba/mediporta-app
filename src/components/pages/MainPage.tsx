import React from "react";
import useFetchData, { Tag } from "../../hooks/useFetchData";
import { useAppSelector } from "../../hooks/storeHooks";
import { MainPageTemplate } from "../templates/MainPageTepmplate/MainPageTemplate";

export const SomeComponent: React.FC = () => {
  const urlParams = useAppSelector((state) => state.URLparams);
  const {
    data: tags,
    loading,
    error,
  } = useFetchData<Tag>(
    urlParams.pageNumber.toString(),
    urlParams.pageSize.toString(),
    urlParams.order,
    urlParams.sortBy
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
