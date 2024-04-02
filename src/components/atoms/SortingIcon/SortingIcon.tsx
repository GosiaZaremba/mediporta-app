import React, { useState } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useDispatch } from "react-redux";
import { setNumber, setOrder } from "../../../store/numberSlice";
import "./SortingIcon.css";

export type Props = {
  order?: "desc" | "asc";
};

export const SortingIcon: React.FC<Props> = ({ order }) => {
  const dispatch = useDispatch();
  const [rotated, setRotated] = useState(false);

  const onClickOrderIcon = (ord: "desc" | "asc") => {
    dispatch(setOrder(ord));
    dispatch(setNumber({ key: "pageNumber", value: 1 }));
    setRotated(!rotated);
  };

  return (
    <ArrowUpwardOutlinedIcon
      className={`sorting-icon ${rotated ? "rotated" : ""}`}
      onClick={() => onClickOrderIcon(order === "desc" ? "asc" : "desc")}
      color="primary"
    />
  );
};
