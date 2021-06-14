import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";

const Table = ({ columns, data }) => {
  const COLUMNS = useMemo(() => columns, []);

  //   const DATA = useMemo(() => data, []);

  const tableObj = useTable({
    columns: COLUMNS,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableObj;
  return (
    <div className="shadow-sm p-3 mb-5 bg-white rounded">
      <table {...getTableProps()} className="table table-hover">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
