import React, { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import classes from "./Header.module.scss"
import ContextProvider from "../../context/ContextProvider"

const Header = () => {
  const { logged }: any = useContext(ContextProvider)

  return (
    <header className={classes.headerContainer}>
       {!logged.success &&
      <div>
        <NavLink to="/login">
          <h3>Login</h3>
        </NavLink>
      </div>}
      <div>
        {logged.success ? (
          <NavLink to="/employees">
            <h3>Employees</h3>
          </NavLink>) : 
          <h3>Employees</h3>
        }
      </div>
      <div>
      {logged.success ? (  
        <NavLink to="/upload">
          <h3>Upload</h3>
        </NavLink>) : 
          <h3>Upload</h3>
        }
      </div>
    </header>
  )
}

export default Header
