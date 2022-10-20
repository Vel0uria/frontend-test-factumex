import React, { useEffect, useState } from "react"
import { useTable, Column, useSortBy, } from "react-table"
import axios from "axios"

interface Props {
    columns: Array<Column<object>>;
    data: Array<object>;
  }


const Employees = () => {
  const columns: any = 

        [
      {
        Header: "Id",
        accessor: "id"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Last name",
        accessor: "last_name"
      },
      {
        Header: "Birthday",
        accessor: "birthday"
      }
    ]


  const [dataTable, setDataTable] = useState([])
  const url =
    "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:tu_nombre"

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setDataTable(data.data.employees)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


const Table: React.FC<Props> = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable(
      {
        columns,
        data
      },
      useSortBy
    );
    const firstPageRows = rows.slice(0, 20);
return(
<>
<table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                 
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
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
</>)}
  return (
    <div>
      <h2>Employees</h2>
      <Table columns={columns} data={dataTable}/>
    </div>
  )
}

export default Employees
