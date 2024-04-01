import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Tag } from "../../../hooks/useFetchData";
import { SortingIcon } from "../../atoms/SortingIcon/SortingIcon";

export type Props = {
  data: Tag[] | null;
};

export const DataTable: React.FC<Props> = ({ data }) => {
  const onClickIcon = () => {
    console.log("click");
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Tag name
              <SortingIcon onClick={onClickIcon} />
            </TableCell>
            <TableCell>
              Tag count
              <SortingIcon onClick={onClickIcon} />
            </TableCell>
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
