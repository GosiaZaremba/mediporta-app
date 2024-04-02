import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useDispatch } from "react-redux";
import { setNumber, setOrder } from "../../../store/numberSlice";
import "./SortingIcon.css";

export type Props = {
  order?: "desc" | "asc";
};

export const SortingIcon: React.FC<Props> = ({ order }) => {
  const dispatch = useDispatch();

  const onClickOrderIcon = (ord: "desc" | "asc") => {
    dispatch(setOrder(ord));
    dispatch(setNumber({ key: "pageNumber", value: 1 }));
  };
  return order === "desc" ? (
    <ArrowDownwardOutlinedIcon
      onClick={() => onClickOrderIcon("asc")}
      color="secondary"
    />
  ) : (
    <ArrowUpwardOutlinedIcon
      onClick={() => onClickOrderIcon("desc")}
      color="primary"
    />
  );
};
