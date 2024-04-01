import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tag } from "../../../hooks/useFetchData";
import { TableHeaderCell } from "../TableHeaderCell/TableHeaderCell";
import TablePagination from "@mui/material/TablePagination";
import { useAppSelector } from "../../../hooks/storeHooks";
import { useDispatch } from "react-redux";
import { setNumber } from "../../../store/numberSlice";
import "./DataTable.css";

export type Props = {
  data: Tag[] | null;
};

export const DataTable: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();

  const urlParams = useAppSelector((state) => state.URLparams);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    dispatch(
      setNumber({
        key: "pageNumber",
        value: newPage + 1,
      })
    );
  };

  return (
    <div className="red">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell cellName="Tag name" cellFunction="name" />
            <TableHeaderCell cellName="Tag count" cellFunction="popular" />
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((tag: Tag) => (
            <TableRow key={tag.name}>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={10 * 25}
        onPageChange={onPageChange}
        page={urlParams.pageNumber - 1}
        rowsPerPage={urlParams.pageSize}
        rowsPerPageOptions={[]}
      />
    </div>
  );
};
