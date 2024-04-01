import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export type Props = {
  ascending?: boolean;
  onClick: () => void;
};

export const SortingIcon: React.FC<Props> = ({ ascending, onClick }) => {
  ascending = false;
  console.log(ascending);

  return { ascending } ? (
    <ArrowUpwardOutlinedIcon onClick={onClick} />
  ) : (
    <ArrowDownwardOutlinedIcon onClick={onClick} />
  );
};
