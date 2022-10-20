import React, {useContext, useEffect, useState, Fragment} from "react";
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import ContextProvider from "./context/ContextProvider";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Employees from "./components/Employees/Employees";
import Upload from "./components/Upload/Upload";
import Home from "./components/Home/Home";
const Router = () => {


 const {logged} : any = useContext(ContextProvider)

    return(
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login />}/>
        {logged.success &&( 
        <Fragment>
         <Route path="/employees" element={<Employees/>}/>
         <Route path="/upload" element={<Upload/>}/>
         </Fragment>)}
        </Routes>
        </BrowserRouter>
    )
}

export default Router