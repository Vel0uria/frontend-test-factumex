import React, { useEffect, useState } from "react"
import { useTable, Column, useSortBy } from "react-table"
import axios from "axios"
import useForm from "../../hooks/useForm"
import classes from "./Employees.module.scss"
interface Props {
  columns: Array<Column<object>>
  data: Array<object>
}

const Employees = () => {
  const [dataTable, setDataTable] = useState([])
  const [form, handleInputs] = useForm()

  const url =
    "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/sofia"
    const getEmployees = () => {
        axios
        .get(url)
        .then(({ data }) => {
          setDataTable(data.data.employees)
          console.log(data);  
        })
        .catch((error) => {
          console.log(error)
        })
    }
  useEffect(() => {

    getEmployees()
  }, [])

  const handleSubmit = (e:any) => {
    e.preventDefault()
    axios
      .post(url, form)
      .then((res) => {
        getEmployees()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const columns: any = [
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

  const Table: React.FC<Props> = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(
        {
          columns,
          data
        },
        useSortBy
      )
    const firstPageRows = rows.slice(rows.length -19, rows.length)
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
  return (
    <div className={classes.employeesContainer}>
      <h2>Employees</h2>
      <div className={classes.tableForm}>
        <Table columns={columns} data={dataTable} />
        <form className={classes.employeesForm} onSubmit={handleSubmit}>
          <h3>New employee</h3>
          <p>Your First name</p>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputs}
          />
          <p>Your Last name</p>
          <input type="text" placeholder="Last name" name="last_name"  onChange={handleInputs}/>
          <p>Your birthday</p>
          <input type="date" placeholder="Birthday" name="birthday"  onChange={handleInputs}/>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Employees
