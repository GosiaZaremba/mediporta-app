import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tag } from "../../../hooks/useFetchData";

export type Props = {
  data: any;
};

export const DataTable: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ord.</TableCell>
            <TableCell>Tag name</TableCell>
            <TableCell>Tag count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tag: Tag, index: number) => (
            <TableRow key={tag.name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
