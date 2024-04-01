import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tag } from "../../../hooks/useFetchData";
import { TableHeaderCell } from "../TableHeaderCell/TableHeaderCell";

export type Props = {
  data: Tag[] | null;
};

export const DataTable: React.FC<Props> = ({ data }) => {
  return (
    <div>
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
    </div>
  );
};
