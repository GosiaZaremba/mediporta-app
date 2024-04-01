import React from "react";
import TableCell from "@mui/material/TableCell";
import { SortingIcon } from "../../atoms/SortingIcon/SortingIcon";
import { useAppSelector } from "../../../hooks/storeHooks";
import { useDispatch } from "react-redux";
import { setNumber, setSortBy } from "../../../store/numberSlice";
import "./TableHeaderCell.css";

export type Props = {
  cellName: string;
  cellFunction: "name" | "popular";
};

export const TableHeaderCell: React.FC<Props> = ({
  cellName,
  cellFunction,
}) => {
  const urlParams = useAppSelector((state) => state.URLparams);
  const dispatch = useDispatch();

  const arrowAppear = cellFunction === urlParams.sortBy ? true : false;

  const onClickTableCell = () => {
    dispatch(setSortBy(cellFunction));
    dispatch(setNumber({ key: "pageNumber", value: 1 }));
  };

  return (
    <TableCell onClick={onClickTableCell}>
      {cellName}
      {arrowAppear && <SortingIcon order={urlParams.order} />}
    </TableCell>
  );
};
